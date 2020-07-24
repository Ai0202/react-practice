import React, { useState, useCallback } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { useDispatch } from "react-redux";
import { signIn } from "../reducks/users/operations";
import { push } from "connected-react-router"

const SignIn = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("")

  const inputEmail = useCallback(e => {
    setEmail(e.target.value)
  }, [setEmail])

  const inputPassword = useCallback(e => {
    setPassword(e.target.value)
  }, [setPassword])

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">サインイン</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true} 
        label={"メール"} 
        multiline={false} 
        required={true} 
        rows={1} 
        value={email}
        type={"mail"}
        onChange={inputEmail}
      />
      <TextInput
        fullWidth={true} 
        label={"パスワード"} 
        multiline={false} 
        required={true} 
        rows={1} 
        value={password}
        type={"password"}
        onChange={inputPassword}
      />
      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton  
          label={"サインイン"}
          onClick={() => { dispatch(signIn(email, password))}}
        />
      </div>
      <div className="module-spacer--medium" />
      <div className="center">
        <p className="u-text-small" onClick={() => dispatch(push('/resetpassword'))}>パスワードを忘れた方はこちら</p>
        <p className="u-text-small" onClick={() => dispatch(push('/signup'))}>アカウント登録がまだの方はこちら</p>
      </div>
    </div>
  )
}

export default SignIn