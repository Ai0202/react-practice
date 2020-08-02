import React, { useEffect } from 'react'
import List from '@material-ui/core/List'
import { OrderHistoryItem } from '../components/Products'
import { makeStyles } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { getOrdersHistory } from '../reducks/users/selectors'
import { fetchOrdersHistory } from '../reducks/users/operations'

const cleateStyles = makeStyles((theme) => ({
  orderList: {
    // background: theme.palette.grey["100"],
    margin: '0 auto',
    padding: 32,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
    [theme.breakpoints.up('md')]: {
      width: 768
    }
  },
}))

const OrderHistory = () => {
  const classes = cleateStyles()
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const orders = getOrdersHistory(selector)

  useEffect(() => {
    /**
     * 1. fetchOrdersHistoryでFirebaseからordersを取得
     * 2. fetchOrderHistoryActionを実行
     * 3. reducerが実行されてstoreのordersが更新される
     * 4. getOrderHistory selectorでstoreのorderの内容を取得
     */
    dispatch(fetchOrdersHistory())
  }, [])

  return (
    <section className="c-section-wrapin">
      <List className={classes.orderList}>
        {orders.length > 0 && (
          orders.map(order => <OrderHistoryItem order={order} key={order.id} />)
        )}
      </List>
    </section>
  )
}

export default OrderHistory