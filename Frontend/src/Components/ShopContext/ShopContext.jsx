import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
const getDefaultCart = () => {

    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;

}
const ShopContextProvider = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    useEffect(() => {
        console.log("Fetching data...");

        fetch("http://localhost:3000/allproducts")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network Response was not ok");

                }
                return response.json()
            })
            .then((data) => setAllProducts(data))
            .catch((error) => {
                console.error("Problem with fetching")
            });

        if (localStorage.getItem("auth-token")) {
            fetch("http://localhost:3000/getcart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json",

                },
                body: "",
            }).then((response) => response.json())
                .then((data) => setCartItems(data));
        }
    }, [])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        if (localStorage.getItem("auth-token")) {

            fetch("http://localhost:3000/addtocart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "itemId": itemId }),
            }).then((response) => response.json())
                .then((data) => console.log(data)
                );
        }
        console.log("Item Added to cart is " + itemId);

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (localStorage.getItem("auth-token")) {

            fetch("http://localhost:3000/removefromcart", {
                method: "POST",
                headers: {
                    Accept: "application/form-data",
                    "auth-token": `${localStorage.getItem("auth-token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "itemId": itemId }),
            }).then((response) => response.json())
                .then((data) => console.log(data)
                );
        }
        console.log("Item Removed from cart is " + itemId);
    }
    const getTotalCartAmount = (() => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    })
    const getTotalCartItems = (() => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        console.log(totalItems);

        return totalItems;
    })
    const contextValue = { allProducts, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems }
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider; 