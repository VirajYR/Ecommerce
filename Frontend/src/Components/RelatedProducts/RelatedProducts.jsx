import React from 'react'
import "./RelatedProducts.css"
import RelatedData from "../assets/data"
import Item from '../Item/Item'
const RelatedProducts = () => {
    return (
        <>
            <div className="RelatedProducts">
                <h1>Related Products</h1>
                <hr />
                <div className="RelatedProductsItem">
                    {

                        RelatedData.map((item, i) => {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />
                        })}
                </div>
            </div>
        </>
    )
}

export default RelatedProducts