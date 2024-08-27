import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../ShopContext/ShopContext'
import removeIcon from "../assets/cart_cross_icon.png"

const CartItems = () => {
    const { allProducts, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext);

    return (
        <>


            <div className="CartItems">
                <div className="CartItemsFormatMain">
                    <p>Products</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <hr />
                {allProducts.map((e) => {


                    if (cartItems[e.id] > 0) {

                        return <div>

                            <div className="CartItemsFormat CartItemsFormatMain">

                                <img className="CartProductImg" src={e.image} alt="Product Image" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="CartQuantityBtn">{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className="CartRemoveImg" src={removeIcon} alt="Remove Product" onClick={() => { removeFromCart(e.id) }} />
                            </div>

                            <hr />
                        </div>
                    }
                    return null;
                })}

                <div className="CartCheckout">
                    <div className="CartAmount">


                        <h2>Cart Totals</h2>
                        <div className="CartTotals">

                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="CartShippingFee">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div> <hr />
                        <div className="CartFinalAmount">


                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <div className="CheckOutBtn">
                            <button>Proceed To Checkout</button>
                        </div> </div>
                    <div className="Promocode">
                        <p>If you have a promo code , Enter it here</p>
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItems