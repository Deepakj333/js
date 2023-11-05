// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct, setupStore } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items

const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM     = getElement('.cart-items');
const cartTotalDOM     = getElement('.cart-total');

let cart = getStorageItem('cart')

export const addToCart = (id) => {
   let item = cart.find((cartItem)=>cartItem.id===id);
   if(!item){
        let product = findProduct(id);
        //add item to the card
        product = {...product,amount:1};
        cart = [...cart,product];
        addToCartDOM(product);

   }else{

      const newAmout = increaseAmount(id);
      const items = [...cartItemsDOM.querySelectorAll('.cart-item-amount')]
      const newelement = items.find((value)=>value.dataset.id === id);
      newelement.textContent = newAmout;
   }

    displayCartItemCount();


    displayTotalAmount();

   setStorageItem('cart',cart);

   openCart(id);

};

function increaseAmount(id){

  let newCount ;
  cart = cart.map(item=>{
    
    if(item.id === id){
      newCount = item.amount+1;
      item ={...item, amount: newCount};
    }
   return item;
  })

  return newCount;
}


function decreaseAmount(id){

  let newCount ;
  cart = cart.map(item=>{
    
    if(item.id === id){
      newCount = item.amount-1;
      item ={...item, amount: newCount};
    }
   return item;
  })

  return newCount;
}

function displayCartItemCount(){
    let totalCount = cart.reduce((total,item) =>{
      return total += item.amount;
    } ,0);

    cartItemCountDOM.textContent = totalCount;
}

function displayTotalAmount(){
  let totalAmount = cart.reduce((total,item)=>{
    return total += item.price * item.amount
  },0);

  cartTotalDOM.textContent = `TOTAL : ${formatPrice(totalAmount)}`;

}

function displayCartItemDOM(){

  cart.forEach(element => {
    addToCartDOM(element);
  });

}

function removeItem(id){
  cart = cart.filter((item)=> item.id !==id);
}

function setUpCartFuntinality(){

  cartItemsDOM.addEventListener('click',function(e){
    const element = e.target;
    const parent  = e.target.parentElement;
    const id      = e.target.dataset.id;
    const parentID = e.target.parentElement.dataset.id;

    if(element.classList.contains('cart-item-remove-btn')){
      removeItem(id);
      parent.parentElement.remove();
    }

    if(parent.classList.contains('cart-item-increase-btn')){
      const newAcount = increaseAmount(parentID);
      parent.nextElementSibling.textContent = newAcount; 
    }

    if(parent.classList.contains('cart-item-decrease-btn')){
      const newAcount = decreaseAmount(parentID);
      if(newAcount===0){
        removeItem(parentID);
        parent.parentElement.parentElement.remove();
      }else{
        parent.previousElementSibling.textContent = newAcount; 
      }
    }


    displayCartItemCount();
    displayTotalAmount();
    setStorageItem('cart',cart);

  })


}

const init =()=>{
  displayCartItemCount();
  displayTotalAmount();
  displayCartItemDOM();
  setUpCartFuntinality();
};

init();
