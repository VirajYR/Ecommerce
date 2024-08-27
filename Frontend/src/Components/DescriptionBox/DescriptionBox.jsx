import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <>
    <div className="DescriptionBox">
        <div className="DescriptionBoxNavigator">
            <div className="DescriptionBoxNav">Description</div>
            <div className="DescriptionBoxNav">Reviews (122)</div>
        </div>
        <div className="ProductDescription">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptatum sapiente libero laborum rerum ut nemo natus molestiae vitae! Est, amet temporibus doloremque architecto asperiores sint nostrum consequatur ratione excepturi quidem quasi.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam praesentium facilis sint neque vero quibusdam dicta earum iste debitis eos eaque omnis delectus doloribus, consectetur nihil, odit, eius nobis consequuntur.</p>
        </div>
    </div>
    </>
  )
}

export default DescriptionBox