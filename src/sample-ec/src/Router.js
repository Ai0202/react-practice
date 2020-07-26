import React from "react"
import { Route, Switch } from "react-router"
import { 
  SignUp, 
  SignIn,
  ResetPassword,
  ProductEdit,
  ProductList, 
  ProductDetail} from "./templates"
import Auth from "./Auth"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/resetpassword" component={ResetPassword} />

      <Auth>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route path="/products/edit(/:id)?" component={ProductEdit} />
      </Auth>
    </Switch>
  )
}

export default Router