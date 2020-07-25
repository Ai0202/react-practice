import { db, FirebaseTimestamp } from "../../firebase"
import { push } from "connected-react-router"
import { fetchProductsAction } from "./actions"

const productsRef = db.collection('products')

export const saveProduct = (name, description, category, gender, price, images, sizes) => {
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

    const ref = productsRef.doc()
    data.created_at = timestamp;
    const id = ref.id;
    data.id = id;

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