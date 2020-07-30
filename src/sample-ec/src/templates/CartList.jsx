import React from 'react'
import { PrimaryButton, GreyButton } from '../components/UIkit'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import { getProductsInCart } from '../reducks/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { CartListItem } from '../components/Products'

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    maxWidth: 512,
    width: '100%'
  }
}))

const CartList = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const productsInCart = getProductsInCart(selector)

  return (
    <section className="c-section-wrapin">
      <h2 className="u-text__headline">ショッピングカート</h2>
      <List className={classes.root}>
        {productsInCart.length > 0 && (
          productsInCart.map(product => <CartListItem product={product} key={product.cartId} />)
        )}
      </List>
      <div className="module-spacer--medium" />
      <div className="p-grid__column">
        <PrimaryButton label={"レジへ進む"} onClick={() => {}} />
        <div className="module-spacer--extra-extra-small" />
        <GreyButton label={"ショッピングを続ける"} onClick={() => { }} />
      </div>
    </section>
  )
}

export default CartList