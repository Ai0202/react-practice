import { db, auth, FirebaseTimestamp } from '../../firebase/index';
import { isValidEmailFormat, isValidRequiredInput } from "../../functions/common";
import { hideLoadingAction, showLoadingAction } from "../loading/actions";
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