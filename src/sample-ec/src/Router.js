import React from "react"
import { Route, Switch } from "react-router"
import { 
  SignUp, 
  SignIn,
  ResetPassword,
  ProductEdit,
  ProductList } from "./templates"
import Auth from "./Auth"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/resetpassword" component={ResetPassword} />

      <Auth>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products/edit" component={ProductEdit} />
      </Auth>
    </Switch>
  )
}

export default Router