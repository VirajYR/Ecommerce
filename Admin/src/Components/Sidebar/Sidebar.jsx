import React from 'react'
import "./Sidebar.css"
import { Link } from 'react-router-dom'
import addProductIcon from "../../assets/Product_Cart.svg"
import listProductIcon from "../../assets/Product_list_icon.svg"
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Link to={"./addproduct"} style={{ textDecoration: "none" }}>
                <div className="SidebarItem">

                    <img src={addProductIcon} alt="Add Product" />
                    <p>Add Product</p>
                </div>
            </Link>

            <Link to={"./listproduct"} style={{ textDecoration: "none" }}><div className="SidebarItem">

                <img src={listProductIcon} alt="List Product" />
                <p>Product List</p>
            </div>
            </Link>
        </div>
    )
}

export default Sidebar