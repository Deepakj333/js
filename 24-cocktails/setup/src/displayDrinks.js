import get from "./getElement.js";
import { hideLoading } from './toggleLoading.js'

const displayDrinks = ({drinks})=>{

    const section = get('.section-center');
    const title = get('.title');
    console.log(drinks);
   
    if(!drinks){
        title.textContent = 'Sorry Not Found'
        section.innerHTML = '';
        hideLoading();
        return;
    }

    const newDrinks = drinks.map((drink)=>{
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
         return `<a href="drink.html">
         <article class="cocktail" data-id="${id}">
           <img src="${image}" alt="${name}" />
           <h3>${name}</h3>
         </article>
       </a>`;
    }).join('');
    section.innerHTML = newDrinks;
    title.textContent = ''
    hideLoading();
    return section;
} 

export default displayDrinks;