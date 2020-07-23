import React from "react"
import { useDispatch } from "react-redux";
import { signOut } from "../reducks/users/operations";

const ProductList = () => {
  const dispatch = useDispatch()
  return (
    <div className="center">
      <button onClick={() => dispatch(signOut())}>サインアウト</button>
    </div>
  )
}

export default ProductList