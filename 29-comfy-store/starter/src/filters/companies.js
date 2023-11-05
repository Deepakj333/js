import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const companiesDOM = getElement('.companies');

    let companies =['all',...new Set(store.map(product=>product.company))];
    companiesDOM.innerHTML = companies.map(company=>{
        return `<button class="company-btn">${company}</button>`;
    }).join('');
    
    companiesDOM.addEventListener('click',function(e){
         //e.target.textContent
        const element = e.target;
        let newStore = [];
        if(element.classList.contains('company-btn')){

            if(element.textContent==='all'){
                newStore  = [...store];    
            }else{

                newStore =  store.filter((product) => product.company === element.textContent);
            }
            display(newStore,getElement('.products-container'),true);
            
        }


    })

};

export default setupCompanies;
