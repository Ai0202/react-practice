import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, SelectBox, PrimaryButton } from '../components/UIkit'
import { ImageArea, SetSizesArea } from '../components/Products'
import { useDispatch } from 'react-redux'
import { saveProduct } from '../reducks/products/operations'
import { db } from '../firebase'


const ProductEdit = () => {
  const dispatch = useDispatch()
  let id = window.location.pathname.split('/products/edit')[1]
  if (id !== "") {
    id = id.split('/')[1]
  }

  const genders = [
    { id: "all", name: "すべて" },
    { id: "male", name: "メンズ" },
    { id: "female", name: "レディース" }
  ]

  const [name, setName] = useState(""),
        [description, setDescription] = useState(""),
        [images, setImages] = useState([]),
        [category, setCategory] = useState(""),
        [categories, setCategories] = useState([]),
        [gender, setGender] = useState(""),
        [price, setPrice] = useState(""),
        [sizes, setSizes] = useState([])

  useEffect(() => {
    if (id !== "") {
      db.collection('products').doc(id).get().then(snapshot => {
        const product = snapshot.data()
        console.log(product)
        setName(product.name)
        setDescription(product.description)
        setImages(product.images)
        setCategory(product.category)
        setGender(product.gender)
        setPrice(product.price)
        setSizes(product.sizes)
      })
    }
  }, [id])

  const inputName = useCallback(e => {
    setName(e.target.value)
  }, [setName])

  const inputDescription = useCallback(e => {
    setDescription(e.target.value)
  }, [setDescription])

  const inputPrice = useCallback(e => {
    setPrice(e.target.value)
  }, [setPrice])

  useEffect(() => {
    const list = [
      {id: 1, name: 'シャツ'},
      {id: 2, name: 'パンツ'},
      {id: 3, name: 'アウター'},
    ]
    setCategories(list)
  }, [])
         
  return (
    <section>
      <h2 className="u-text__headline u-text-center">
        商品の登録・編集
      </h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput
          fullWidth={true} 
          label={"商品名"} 
          multiline={false} 
          required={true}
          onChange={inputName} 
          rows={1} 
          value={name} 
          type={"text"}
        />
        <TextInput
          fullWidth={true} 
          label={"商品説明"} 
          multiline={true} 
          required={true}
          onChange={inputDescription} 
          rows={5} 
          value={description} 
          type={"text"}
        />
        <SelectBox
          label={"カテゴリー"}
          options={categories}
          required={true}
          select={setCategory}
          value={category}
        />
        <SelectBox 
          label={"性別"}
          options={genders}
          required={true}
          select={setGender}
          value={gender}
        />
        <TextInput
          fullWidth={true}
          label={"価格"}
          multiline={false}
          required={true}
          onChange={inputPrice}
          rows={1}
          value={price}
          type={"number"}
        />
        <SetSizesArea 
          sizes={sizes}
          setSizes={setSizes}
        />
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={"商品情報を保存"}
            onClick={() => dispatch(saveProduct(name, description, category, gender, price, images, sizes))}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductEdit