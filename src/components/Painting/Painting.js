import React from 'react'
export default function Painting(props) {
    return (
        <div id="picture-wrapper">
            <div id="picture-container">
                <div id="picture"><img id="picture" src={"img/"+props.image} alt="tavla1" /></div>
                <div id="Name"><p className="image-text">{props.name}</p></div>
                <div id="Sold"><p>{props.sold && "SÅLD"}</p></div>
                <div id="Price">
                    <p className="image-text">{props.price}</p>
                </div>
                <div id="Size">
                    <p className="image-text">{props.size}</p>
                </div>
            </div>
        </div>
    )
}