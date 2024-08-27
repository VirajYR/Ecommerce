import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = (props) => {
    return (
        <>
            <Link to={`/product/${props.id}`} onClick={scrollTo(0,0)}>
                <div className="Item">
                    <img src={props.image} alt="Item Display Picture" />
                    <p>{props.name}</p>
                    <div className="ItemPrices">
                        <div className="ItemPriceNew">
                            &#8377;{props.newPrice}
                        </div>
                        <div className="ItemPriceOld">
                            {props.oldPrice}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Item