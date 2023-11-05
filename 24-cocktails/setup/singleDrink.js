import fetchDrinks from "./src/fetchDrinks.js"
import displaySingleDrink from "./src/displaySingleDrink.js";

const presetSingleDrink = async ()=>{
     const id = localStorage.getItem('drink');
     if(!id){  
          window.location.replace('index.html');
     }else{  
         const singleDrinkData = await fetchDrinks(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
         displaySingleDrink(singleDrinkData);
    }
}

window.addEventListener('DOMContentLoaded',presetSingleDrink);