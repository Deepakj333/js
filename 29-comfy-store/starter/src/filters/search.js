import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {

const inputForm = getElement('.input-form');
const input     = getElement('.search-input');
const priceform = getElement('.price-form');

inputForm.addEventListener('keyup',function(e){
    e.preventDefault();
    if(input.value){
        const value = input.value;
        if(value){
            const newStore = store.filter(product=>{
                let {name} = product;
                name = name.toLowerCase();
                if(name.startsWith(value)){
                    return product;
                }
            })
            display(newStore,getElement('.products-container'),true) ;
            if(newStore.length < 1){
                const productcontainer = getElement('.products-container');
                productcontainer.innerHTML = `<h3 class="filter-error"> sorry no products matches your search </h3>`
            }
        }
    }else{
        display(store,getElement('.products-container')) 
    }

})

};

export default setupSearch;
