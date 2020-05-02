import React from 'react'
//"img/tavla.jpg"
export default function Painting(props) {
    return (
        <div id="picture-wrapper">
            <div id="picture-container">
                <div id="picture"><img id="picture" src={"img/"+props.image} alt="tavla1" /></div>
                <div id="Name"><p>{props.name}</p></div>
                <div id="Sold"><p>{props.sold && "SÅLD"}</p></div>
                <div id="Price">
                    <p>{props.price}</p>
                </div>
                <div id="Size">
                    <p>{props.size}</p>
                </div>
            </div>
        </div>
    )
}