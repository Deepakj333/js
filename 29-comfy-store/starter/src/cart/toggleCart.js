import { getElement } from '../utils.js';

const togglecart = getElement('.toggle-cart');
const cartoverlay = getElement('.cart-overlay');
const cartclose = getElement('.cart-close');

togglecart.addEventListener('click',()=>{
    cartoverlay.classList.add('show');
})

cartclose.addEventListener('click',()=>{
    cartoverlay.classList.remove('show');
})

export const openCart = (id) => {
    cartoverlay.classList.add('show');
};
