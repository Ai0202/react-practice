import React, { useState, useCallback, useEffect } from 'react'
import { TextInput, SelectBox, PrimaryButton } from '../components/UIkit'
import { ImageArea } from '../components/Products'
import { useDispatch } from 'react-redux'
import { saveProduct } from '../reducks/products/operations'


const ProductEdit = () => {
  const dispatch = useDispatch()

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
        [price, setPrice] = useState("")

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
        <div className="module-spacer--small" />
        <div className="center">
          <PrimaryButton
            label={"商品情報を保存"}
            onClick={() => dispatch(saveProduct(name, description, category, gender, price))}
          />
        </div>
      </div>
    </section>
  )
}

export default ProductEdit