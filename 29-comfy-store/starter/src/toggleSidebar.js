import { getElement } from './utils.js';


const togglenav = getElement('.toggle-nav');
const sidebaroverlay = getElement('.sidebar-overlay');
const sidebarclose = getElement('.sidebar-close');


togglenav.addEventListener('click', ()=>{
     sidebaroverlay.classList.add('show');
})

sidebarclose.addEventListener('click',()=>{
    sidebaroverlay.classList.remove('show');
})