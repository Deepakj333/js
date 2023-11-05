import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {

    const inputPrice = getElement('.price-filter');
    const priceValue = getElement('.price-value');
    
    let maxPrice = store.map(product=>product.price);
    maxPrice = Math.max(...maxPrice);
    maxPrice = Math.ceil(maxPrice/100);
    inputPrice.value = maxPrice;
    inputPrice.max = maxPrice;
    inputPrice.min = 0;
    priceValue.textContent = `Value: ${maxPrice}`

    inputPrice.addEventListener('input',()=>{
        const value = inputPrice.value;
        priceValue.textContent = `Value: ${value}`
        let newstore = store.filter(product=> product.price/100 <= value);
        display(newstore,getElement('.products-container'),true);

        if(newstore.length<1){
            let productDom =getElement('.products-container');
            productDom.innerHTML = `<h3 class="filter-error"> sorry no products matches your search </h3>`;
        }


    })

};

export default setupPrice;
