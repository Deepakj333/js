import get from "./getElement.js"
import removeActive from "./removeActive.js";

const img = get('.user-img');
const title = get('.user-title');
const value = get('.user-value');
const btn = get('.btn');
const btns = [...document.querySelectorAll('.icon')];

const display = async (person) =>{
    img.src = person.image; 
    value.textContent = `${person.first} ${person.last}`
    btns[0].classList.add('active');
    btns.forEach ((btn)=>{
        const label = btn.dataset.label;
        btn.addEventListener('click', ()=>{
            title.textContent = `My ${label} is`;
            value.textContent = person[label];
            removeActive(btns);
            btn.classList.add('active');
        })
    })

}

export default display;