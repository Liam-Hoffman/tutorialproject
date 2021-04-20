import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './components/storeProduct';
import About from './components/aboutUs';
import SaleStore from './components/saleStore'

ReactDOM.render(
  <React.StrictMode>
    <Product title="Orange Tee" description="Solid Orange T-Shirt" id="1" price="18.99" url="https://m.media-amazon.com/images/I/61mSyjeYXWL._AC_UL1001_.jpg"/>
    <Product title="Graphic Tee" description="T-shirt with a graphic printed on the front" price="24.99" id="2" url="https://cdn.shopify.com/s/files/1/2095/4589/files/wpshirtlrg2_x575.jpg?v=1594657886"/>
    <Product title="Flannel" description="A thinner flannel" id="3" price="39.99" url="https://cdni.llbean.net/is/image/wim/228061_2906_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2"/>
    <Product title="Soft Tech Jacket" description="Black jacket, no hood." id="4" price="69.99" url="https://cdn.shopify.com/s/files/1/0017/2146/6995/products/DX-2_BLACK_2000x.jpg?v=1555455841"/>
    <Product title="Cream Hoodie" description="A cream hoodie perfect for fall weather" id="5" price="44.99" url="https://bit.ly/3gnHj89"/>
    <Product title="Navy Blue Polo" description="Navy blue polo, perfect for any occasion" id="6" price="34.99" url="https://bit.ly/2P2aClw"/>
    <Product title="Royal Blue Tie" description="A deep blue tie" id="7" price="19.99" url="https://bit.ly/3gpBwPI"/>
    <Product title="Black Tee" description="Solid Black T-Shirt" id="8" price="19.99" url="https://bit.ly/3x7POdr"/>
    <Product title="Graphic Tee" description="Tee with a sunset in a mesa setting" id="9" price="24.49" url="https://bit.ly/3xaobQX"/>
    <Product title="Artist Tee" description="T-Shirt with an original design from an artist" id="10" price="29.99" url="https://bit.ly/3apz3AW"/>
    <Product title="Tan Sweater" description="Cashmere sweater" id="11" price="149.99" url="https://bit.ly/3sAG1cq"/>
    <Product title="Blue Vest" description="Puffy blue vest for winter or fall" id="12" price="59.99" url="https://cdn.shopify.com/s/files/1/0017/2146/6995/products/KXV-1_FRONT_AzureBlue_800x.jpg?v=1613152366"/>
  </React.StrictMode>,
  document.getElementById('gallerySection')
);

ReactDOM.render(
  <React.StrictMode>
  <About/>
  <SaleStore/>
  </React.StrictMode>,
  document.getElementById('aboutUs')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
