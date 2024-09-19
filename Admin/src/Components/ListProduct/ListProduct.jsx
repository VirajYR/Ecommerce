import React, { useEffect, useState } from 'react'
import "./ListProduct.css"
require('dotenv').config();
import crossicon from "../../assets/cross_icon.png"
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const fetchInfo = async () => {
    await fetch(`$(process.env.REACT_APP_API_URL)/allproducts`).then((res) => res.json()).then((data) => { setAllProducts(data) });

  }
  useEffect(() => {
    fetchInfo();
  }, []);
  const removeProduct = async (id) => {
    await fetch(`$(process.env.REACT_APP_API_URL)/removeproduct`, {

      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id })
    })
await fetchInfo();

  }
  return (
    <>
      <div className="ListProduct">
        <h1>All Product List</h1>
        <div className="ListProductFormatMain ListProductFormat">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="ListProductAllProducts">
          <hr />
          {allProducts.map((product, index) => {
            return <div key={index} className="ListProductFormatMain">
              <img src={product.image} alt="Product Image" className='ListProductIcon' />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={() => { removeProduct(product.id) }} className='ListProductRemoveIcon' src={crossicon} alt="Remove Product" />



            </div>
          })}

        </div>
      </div>
    </>
  )
}

export default ListProduct