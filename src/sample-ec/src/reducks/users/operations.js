import { db, auth, FirebaseTimestamp } from '../../firebase/index';
import { isValidEmailFormat, isValidRequiredInput } from "../../functions/common";
import { hideLoadingAction, showLoadingAction } from "../loading/actions";
import { signInAction, signOutAction } from "../users/actions";
import { push, goBack } from 'connected-react-router'

const usersRef = db.collection('users')

export const signUp = (username, email, password, confirmPassword) => {
  return async (dispatch) => {
    // Validations
    if (!isValidRequiredInput(email, password, confirmPassword)) {
      alert('必須項目が未入力です。')
      return false
    }

    if (!isValidEmailFormat(email)) {
      alert('メールアドレスの形式が不正です。もう1度お試しください。')
      return false
    }
    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう1度お試しください。')
      return false
    }
    if (password.length < 6) {
      alert('パスワードは6文字以上で入力してください。')
      return false
    }

    return auth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        dispatch(showLoadingAction("Sign up..."))
        const user = res.user

        if (user) {
          const uid = user.uid
          const timestamp = FirebaseTimestamp.now();

          const userInitialData = {
            created_at: timestamp,
            email: email,
            role: "customer",
            uid: uid,
            updated_at: timestamp,
            username: username
          };

          usersRef.doc(uid).set(userInitialData).then(async () => {
            dispatch(push('/'))
            dispatch(hideLoadingAction())
          })
        }

      }).catch(error => {
        dispatch(hideLoadingAction())
        alert('アカウント登録に失敗しました。もう1度お試しください。')
        throw new Error(error)        
      })
  }
}

export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(showLoadingAction("Sign in..."))

    if (!isValidRequiredInput(email, password)) {
      dispatch(hideLoadingAction());
      alert('メールアドレスかパスワードが未入力です。')
      return false
    }

    if (!isValidEmailFormat(email)) {
      dispatch(hideLoadingAction());
      alert('メールアドレスの形式が不正です。')
      return false
    }

    return auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        const userState = res.user

        if (!userState) {
          dispatch(hideLoadingAction());
          throw new Error('ユーザーIDを取得できません')
        }
        const userId = userState.uid

        return usersRef.doc(userId).get().then(snapshot => {
          const data = snapshot.data()

          if (!data) {
            dispatch(hideLoadingAction())
            throw new Error('ユーザーデータが存在しません')
          }

          dispatch(signInAction({
            isSignedIn: true,
            role: data.role,
            uid: userId,
            username: data.username,
          }))

          dispatch(hideLoadingAction())
          dispatch(push('/'))
        })
      }).catch((e) => {
        console.log(e)
        dispatch(hideLoadingAction())
      })
  }
}

export const listenAuthState = () => {
  return async (dispatch) => {
    return auth.onAuthStateChanged(user => {
      if (user) {
        usersRef.doc(user.uid).get().then(snapshot => {
          const data = snapshot.data()

          if (!data) {
            dispatch(hideLoadingAction())
            throw new Error('ユーザーデータが存在しません')
          }

          dispatch(signInAction({
            isSignedIn: true,
            role: data.role,
            uid: user.uid,
            username: data.username,
          }))

          dispatch(push('/'))
        })
      } else {
        dispatch(push('/signin'))
      }
    })
  }
}

export const signOut = () => {
  return async (dispatch) => {
    auth.signOut()
      .then(() => {
        dispatch(signOutAction())
        dispatch(push('/'))
      })
  }
}

export const resetPassword = email => {
  return async dispatch => {
    if (!isValidRequiredInput(email)) {
      alert('必須項目が未入力です。')
      return false
    }

    if (!isValidEmailFormat(email)) {
      dispatch(hideLoadingAction());
      alert('メールアドレスの形式が不正です。')
      return false
    }

    return auth.sendPasswordResetEmail(email)
      .then(() => {
        alert('入力されたアドレス宛にパスワードリセットのメールをお送りしましたのでご確認ください。')
        dispatch(push('/signin'))
      }).catch(() => {
        alert('登録されていないメールアドレスです。もう一度ご確認ください。')
        dispatch(push('/signin'))
      })

  }
}