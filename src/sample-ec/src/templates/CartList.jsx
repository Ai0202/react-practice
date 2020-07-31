import React, { useCallback } from 'react'
import { PrimaryButton, GreyButton } from '../components/UIkit'
import List from '@material-ui/core/List'
import { makeStyles } from '@material-ui/core/styles'
import { getProductsInCart } from '../reducks/users/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { CartListItem } from '../components/Products'
import { push } from 'connected-react-router'

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

  const goToOrder = useCallback(() => {
    dispatch(push('/orders/confirm'))
  }, [])

  const goBackToTop = useCallback(() => {
    dispatch(push('/'))
  }, [])

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
        <PrimaryButton label={"レジへ進む"} onClick={goToOrder} />
        <div className="module-spacer--extra-extra-small" />
        <GreyButton label={"ショッピングを続ける"} onClick={goBackToTop} />
      </div>
    </section>
  )
}

export default CartList