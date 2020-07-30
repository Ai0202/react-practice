import React from 'react'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import { makeStyles } from "@material-ui/styles"
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { useSelector } from 'react-redux'
import { getUserId } from '../../reducks/users/selectors'
import { db } from '../../firebase/index'

const useStyles = makeStyles((theme) => ({
  list: {
    height: 128
  },
  image: {
    objectFit: 'cover',
    margin: 16,
    height: 96,
    width: 96
  },
  text: {
    width: '100%'
  }
}))

const CartListItem = ({ product }) => {
  const classes = useStyles()

  const image = product.images[0]?.path
  const price = product.price.toLocaleString()

  return (
    <>
      <ListItem className={classes.list}>
        <ListItemAvatar>
          <img className={classes.image} src={image} alt="商品のTOP画像" />
        </ListItemAvatar>
        <div className={classes.text}>
          <ListItemText primary={product.name} secondary={"サイズ：" + product.size} />
          <ListItemText primary={"¥" + price} />
        </div>
        <IconButton onClick={() => {}} >
          <DeleteIcon />
        </IconButton>
      </ListItem>
      <Divider />
    </>
  )
}

export default CartListItem