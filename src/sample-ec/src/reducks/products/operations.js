import { db, FirebaseTimestamp } from "../../firebase"
import { push } from "connected-react-router"
import { fetchProductsAction, deleteProductAction } from "./actions"

const productsRef = db.collection('products')

export const saveProduct = (id, name, description, category, gender, price, images, sizes) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();
    const data = {
      category,
      description,
      gender,
      images,
      name,
      price: parseInt(price, 10),
      sizes: sizes,
      updated_at: timestamp
    }

    if (id === "") {
      const ref = productsRef.doc()
      data.created_at = timestamp;
      id = ref.id;
      data.id = id;
    }

    return productsRef.doc(id).set(data, { merge: true })
      .then(() => {
        dispatch(push('/'))
      }).catch((error) => {
        throw new Error(error)
      })
  }
}

export const fetchProducts = () => {
  return async (dispatch) => {
    let query = productsRef.orderBy('updated_at', 'desc')

    query.get()
      .then(snapshots => {
        const productList = []
        snapshots.forEach(snapshot => {
          const product = snapshot.data()
          productList.push(product)
        })
        dispatch(fetchProductsAction(productList))
      })
  }
}

export const deleteProduct = id => {
  return async (dispatch, getState) => {
    productsRef.doc(id).delete()
      .then(() => {
        const prevProducts = getState().products.list
        const nextProducts = prevProducts.filter(product => product.id !== id)
        dispatch(deleteProductAction(nextProducts))
      })
  }
}