import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Badge } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { useDispatch, useSelector } from 'react-redux'
import { push } from 'connected-react-router'

const HeaderMenu = () => {
  const dispatch = useDispatch()

  return (
    <>
      <IconButton onClick={() => dispatch(push('/cart'))}>
        <Badge badgeContent={2} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
    </>
  );
}

export default HeaderMenu