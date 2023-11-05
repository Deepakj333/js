// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
 const loading = getElement('.page-loading');
 const centerDOM = getElement('.single-product-center');
 const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
 const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
 const colorsDOM = getElement('.single-product-colors');
 const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product
 let productID;

const init = async()=>{
    try {
        
     
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    productID = id;
    const response = await fetch(`${singleProductUrl}?id=${id}`);
    if (response.status >= 200 && response.status <= 299) {

        const data = await response.json();
        const {fields:{company,colors,price,name,image:img,description}} = data;
        const image = img[0].thumbnails.large.url;   
        imgDOM.src = image;
        titleDOM.textContent = `${name.toUpperCase()} | Comfy`;
        priceDOM.textContent = formatPrice(price);
        descDOM.textContent = description;
        companyDOM.textContent = `by ${company}`;
        pageTitleDOM.textContent=`Home / ${name}`
        colors.map(color=>{
            const span = document.createElement('sapn');
            span.classList.add('product-color');
            span.style.backgroundColor = `${color}`;
            colorsDOM.appendChild(span);
        })
    }else{
        console.log(response.status, response.statusText);
        centerDOM.innerHTML = `
      <div>
      <h3 class="error">sorry, something went wrong</h3>
      <a href="index.html" class="btn">back home</a>
      </div> 
       `;
    }
   } catch (error) {
    console.log(error);
 
  }
  loading.style.display = 'none';

}

window.addEventListener('DOMContentLoaded', init);

cartBtn.addEventListener('click' ,()=>{
    addToCart(productID);
})

// show product when page loads
