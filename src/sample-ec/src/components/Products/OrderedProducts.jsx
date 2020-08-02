import React, { useCallback } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/styles'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
import { PrimaryButton } from '../UIkit'

const useStyles = makeStyles((theme) => ({
  list: {
    background: '#fff',
    height: 'auto'
  },
  image: {
    objectFit: 'cover',
    margin: '8px 16px 8px 0',
    height: 96,
    width: 96
  },
  text: {
    width: '100%'
  }
}))

const OrderedProducts = ({ products }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const goToProductPage = useCallback((id) => {
    dispatch(push('/products/' + id))
  }, [])

  return (
    products.map(product => (
      <>
        <ListItem key={product.id} className={classes.list}>
          <ListItemAvatar>
            <img className={classes.image} src={product.images[0].path} alt="商品のTOP画像" />
          </ListItemAvatar>
          <div className={classes.text}>
            <ListItemText primary={product.name} secondary={"サイズ：" + product.size} />
            <ListItemText primary={"¥" + product.price.toLocaleString()} />
          </div>
          <PrimaryButton label={"商品詳細を見る"} onClick={() => goToProductPage(product.id)} />
        </ListItem>
        <Divider />
      </>
    ))
  )
}

export default OrderedProducts