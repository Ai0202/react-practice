import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductCard } from '../components/Products'
import { fetchFavoriteProducts } from '../reducks/users/operations'
import { getFavoriteProducts } from '../reducks/users/selectors'

const FavoriteProducts = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state => state)
  const favoriteProducts = getFavoriteProducts(selector)

  useEffect(() => {
    dispatch(fetchFavoriteProducts())
  }, [])

  return (
    <section className="c-section-wrapin">
      <div className="p-grid__row">
        {favoriteProducts.length > 0 && (
          favoriteProducts.map(favorite => {
            return (
              <ProductCard
                key={favorite.productId}
                id={favorite.productId}
                images={favorite.images}
                price={favorite.price}
                name={favorite.name}
              />
            )
          })
        )}
      </div>
    </section>
  );
};

export default FavoriteProducts;