import React from "react";


const aboutUs = () => (
    <div>
        <div className="imageContainer">
            <img src="alex_dixon.jpg" />
            <div class="description">
                <p class="itemTitle">Alex Dixon</p>
                <p class="itemDescription"></p>
            </div>
        </div>

        <div class="imageContainer">
            <img src="liam_hoffman.jpg" />

            <div class="description">
                <p class="itemTitle">Liam Hoffman</p>
                <p class="itemDescription"></p>
            </div>
        </div>

        <div class="right" id="description">
            <h1 class="itemTitle">About Tree-Shirt</h1>
            <p class="description">Here at tree-shirt we care about the environment and want to aid in its health while also providing a perfect service to customers. T-Shirts made and printed
            here used recyled material, non-toxic materials, and comfortable materials, all at an affordable cost and care for you. Each "Tree-Shirt" sold directly results in us planting 1 tree.
            Up above you can see the global amount of trees we have planted so far, and with your help we can plant many more, while also supplying you with some nice comfortable shirts.
        </p>
        </div>
    </div>
);

export default aboutUs;