import React from 'react'
//"img/tavla.jpg"
export default function Painting(props) {
    return (
        <div id="picture-wrapper">
            <div class="picture-container">
                <div class="picture"><img id="picture" src={"img/"+props.image} alt="tavla1" /></div>
                <div class="Name"><p>{props.name}</p></div>
                <div class="Sold"><p>{props.Sold && "SÅLD"}</p></div>
                <div class="Price"><p>{props.price}</p></div>
            </div>
        </div>
        
    )
}