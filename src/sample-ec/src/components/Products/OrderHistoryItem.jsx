import React from 'react'
import Divider from '@material-ui/core/Divider'
import { TextDetail } from '../UIkit'
import List from '@material-ui/core/List'
import { OrderedProducts } from './'
import { datetimeToString, dateToString } from '../../functions/common'
import { makeStyles } from '@material-ui/core'

const cleateStyles = makeStyles((theme) => ({
  order: {
    background: theme.palette.grey["100"],
    margin: '32px auto',
    padding: 32,
  },
}))

const OrderHistoryItem = ({ order }) => {
  const classes = cleateStyles()
  const products = order.products || []
  const orderDatetime = datetimeToString(order.updated_at.toDate())
  const shippingDate = dateToString(order.shipping_date.toDate())
  const totalPrice = `¥${order.amount.toLocaleString()}`

  return (
    <div className={classes.order}>
      <div className="module-spacer--small" />
      <TextDetail label={'注文ID'} value={order.id}  />
      <TextDetail label={'注文日時'} value={orderDatetime}  />
      <TextDetail label={'発送予定日'} value={shippingDate}  />
      <TextDetail label={'注文金額'} value={totalPrice}  />
      {Object.keys(products).length > 0 && (
        <List>
          <OrderedProducts products={products} />
        </List>
      )}
      <div className="module-spacer--extra-extra-small" />
      <Divider />
    </div>
  )
}

export default OrderHistoryItem