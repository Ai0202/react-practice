import React, { useState, useEffect, useCallback } from 'react'
import { db, FirebaseTimestamp } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import { returnCodeToBr } from '../functions/common'
import { SizeTable } from '../components/Products'
import { addProductToCart, addProductToFavorite } from '../reducks/users/operations'
import ImageSwiper from '../components/Products/ImageSwiper'

const useStyles = makeStyles((theme) => ({
  sliderBox: {
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 24px auto',
      height: 320,
      width: 320
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      height: 400,
      width: 400
    },
  },
  detail: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      margin: '0 auto 16px auto',
      height: 320,
      width: 320
    },
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      height: 'auto',
      width: 400
    },
  },
  price: {
    fontSize: 36
  }
}))

const ProductDetail = () => {
  const dispatch = useDispatch()
  const classes = useStyles()
  const [product, setProduct] = useState(null)
  const selector = useSelector(state => state)
  const path = selector.router.location.pathname
  const id = path.split('/products/')[1]

  useEffect(() => {
    db.collection('products').doc(id).get()
      .then(res => {
        const data = res.data()
        setProduct(data)
      })
  }, [])

  const addProduct = useCallback(selectedSize => {
    const timestamp = FirebaseTimestamp.now()
    dispatch(addProductToCart({
      added_at: timestamp,
      description: product.description,
      gender: product.gender,
      images: product.images,
      name: product.name,
      price: product.price,
      productId: product.id,
      quantity: 1,
      size: selectedSize
    }))
  }, [product])

  const addFavorite = useCallback(() => {
    const timestamp = FirebaseTimestamp.now()
    dispatch(addProductToFavorite({
      added_at: timestamp,
      description: product.description,
      gender: product.gender,
      images: product.images,
      name: product.name,
      price: product.price,
      productId: product.id,
    }))
  }, [product])

  return (
    <section className="c-section-wrapin">
      {product && (
        <div className="p-grid__row">
          <div className={classes.sliderBox}>
            <ImageSwiper images={product.images} />
          </div>
          <div className={classes.detail}>
            <h2 className="u-text__headline">{product.name}</h2>
            <p className={classes.price}>
              ￥{(product.price).toLocaleString()}
            </p>
            <div className="module-spacer--small" />
            <SizeTable addProduct={addProduct} addFavorite={addFavorite} sizes={product.sizes} />
            <div className="module-spacer--small" />
            <p>{returnCodeToBr(product.description)}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProductDetail