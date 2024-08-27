import React from 'react'
import "./Breadcrumb.css"
import arrow from "../assets/breadcrum_arrow.png";

const Breadcrumb = (props) => {
    const { product } = props;
    return (
        <>
            <div className="Breadcrumb">
                HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {(product.category).toUpperCase()} <img src={arrow} alt="" /> {product.name}
            </div>
        </>
    )
}

export default Breadcrumb