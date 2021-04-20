import React from "react";


const storeProduct = (props) =>(
<div class="imageContainer">
                <img id="image1" src={props.url} />

                <div class="description">
                    <p class="itemTitle" id={"itemTitle" + props.id}>{props.title}</p>
                    <p class="itemDescription" id={"itemPrice" + props.id}>${Number(props.price).toFixed(2)}</p>
                    <p class="itemDescription">{props.description}</p>
                    <button id={props.id} type="button">Add To Cart</button>

                </div>
            </div>
    
);

export default storeProduct;