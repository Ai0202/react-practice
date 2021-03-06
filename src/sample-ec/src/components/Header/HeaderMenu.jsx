import React, { useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'
import { getProductsInCart, getUserId } from '../../reducks/users/selectors'
import { db } from '../../firebase'
import { fetchProductsInCart } from '../../reducks/users/operations'

const HeaderMenu = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const userId = getUserId(selector)
  let productsInCart = getProductsInCart(selector)

  useEffect(() => {
    // TODO getUserIdの完了前にuseEffectが実行される
    const userId = 'IMjLmX9IKmWUjMQlzUFeR0uIJDE2'
    const unsubscribe = db.collection('users').doc(userId).collection('cart')
      .onSnapshot(snapshots => {
        snapshots.docChanges().forEach(change => {
          const product = change.doc.data()
          const changeType = change.type

          switch (changeType) {
            case 'added':
              productsInCart.push(product)
              break;
            case 'modified':
              const index = productsInCart.findIndex(product => product.cardId === change.doc.id)
              productsInCart[index] = product
              break;
            case 'removed':
              productsInCart.filter(product => product.cardId !== change.doc.id)
              break;
            default:
              break;
          }
        })

        dispatch(fetchProductsInCart(productsInCart))
      })
    return () => unsubscribe()
  }, [])

  return (
    <>
      <IconButton onClick={() => dispatch(push('/cart'))}>
        <Badge badgeContent={productsInCart.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton onClick={() => dispatch(push('/favorite'))}>
        <FavoriteBorderIcon />
      </IconButton>
    </>
  );
}

export default HeaderMenu