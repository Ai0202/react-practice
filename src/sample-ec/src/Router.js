import React from "react"
import { Route, Switch } from "react-router"
import { 
  SignUp, 
  SignIn,
  CartList,
  ResetPassword,
  ProductEdit,
  ProductList, 
  ProductDetail,
  OrderConfirm,
  OrderComplete,
  OrderHistory} from "./templates"
import Auth from "./Auth"

const Router = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/resetpassword" component={ResetPassword} />

      <Auth>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/cart" component={CartList} />
        <Route exact path="/orders/confirm" component={OrderConfirm} />
        <Route exact path="/orders/complete" component={OrderComplete} />
        <Route exact path="/orders/history" component={OrderHistory} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route path="/products/edit(/:id)?" component={ProductEdit} />
      </Auth>
    </Switch>
  )
}

export default Router