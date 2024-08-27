import React, { useContext } from 'react'
import fullStarImg from "../assets/star_icon.png"
import emptyStarImg from "../assets/star_dull_icon.png"
import "./ProductDisplay.css"
import { ShopContext } from '../ShopContext/ShopContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart}=useContext(ShopContext);
    return (
        <>
            <div className="ProductDisplay">
                <div className="ProductDisplayLeft">
                    <div className="ProductImg">

                        <div className="ProductImgList">
                            <img src={product.image} alt="Product Image" />
                            <img src={product.image} alt="Product Image" />
                            <img src={product.image} alt="Product Image" />
                            <img src={product.image} alt="Product Image" />
                        </div>
                        <div className="ProductImgMain">
                            <img src={product.image} alt="Product Image" />
                        </div>
                    </div>
                </div>
                <div className="ProductDisplayRight">
                    <div className="ProductName">

                        <h2>{product.name}</h2>
                    </div>
                    <div className="ProductRating">
                        <div className="RatingImg">
                            <img src={fullStarImg} alt="Rating" />
                            <img src={fullStarImg} alt="Rating" />
                            <img src={fullStarImg} alt="Rating" />
                            <img src={fullStarImg} alt="Rating" />
                            <img src={emptyStarImg} alt="Rating" />
                        </div>
                        <div className="RatingNumber">

                            <p>(122)</p>
                        </div>

                    </div>
                    <div className="ProductPrices">

                        <div className="ProductOldPrice">
                            ${product.old_price}
                        </div>
                        <div className="ProductNewPrice">
                            ${product.new_price}

                        </div>
                    </div>
                    <div className="ProductDescription">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab non blanditiis natus eaque molestiae dolore veniam alias repellendus porro fugiat.</p>
                    </div>
                    <div className="SizeSelection">
                        <h3>Select Size</h3>
                        <ul>
                            <li>S</li>
                            <li>M</li>
                            <li>L</li>
                            <li>XL</li>
                            <li>XXL</li>
                        </ul>
                    </div>
                    <div className="AddToCartBtn">
                        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
                    </div>
                    <div className="ProductCategory">
                        <p><span>Category :</span> Women, TShirt , Crop - Top</p>
                    </div>
                    <div className="ProductTags">
                        <p><span>Tags :</span> Modern , Latest</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDisplay