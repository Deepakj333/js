// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';
import fetchProducts from '../fetchProducts.js';

// specific imports
import { store ,setupStore } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';


const init = async()=>{

const pageloading = getElement('.page-loading');

if(store.length<1){
    const respons = await fetchProducts();
    setupStore(respons);
}

display(store,getElement('.products-container'),false);
setupSearch(store);
setupCompanies(store);
setupPrice(store);
pageloading.style.display = 'none';

}

init();