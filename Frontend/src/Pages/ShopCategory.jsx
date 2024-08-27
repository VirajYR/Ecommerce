import React, { useContext } from 'react'
import "./CSS/ShopCategory.css"
import { ShopContext } from '../Components/ShopContext/ShopContext'
import dropDownIcon from "../Components/assets/dropdown_icon.png"
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const { allProducts } = useContext(ShopContext);
  console.log(allProducts);
  
  return (
    <>
      <div className="ShopCategory">
        <div className="banner">
          <img src={props.banner} alt="Banner Image" />
        </div>
        <div className="sortCategory">

          <div className="CategoryIndexSort">
            <p>
              <span>

                Showing 1-12
              </span> out of 36 products
            </p>
          </div>
          <div className="CategoryProductSort">
            Sort By
            <img src={dropDownIcon} alt="Drop- Down Image" />
          </div>
        </div>
        <div className="products">
          {allProducts.map((item, i) => {
            if (item.category === props.category) {

              return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="exploreMore">
          Explore More
        </div>
      </div >

    </>
  )
}

export default ShopCategory