import peopleData from './data.js';

const slidecontainer  = document.querySelector('.slide-container');
const nxtbtn = document.querySelector('.next-btn');
const prevbtn = document.querySelector('.prev-btn');

slidecontainer.innerHTML = peopleData.map((people,slideIndex)=>{
    const {img,name,job,text} = people;
    let position =  'next';
    if(slideIndex===0){
        position = 'active';
    }
    if(slideIndex === peopleData.length-1){
        position = 'last';
    }

    return `<article class="slide ${position}">
    <img
      src="${img}"
      class="img"
      alt="${name}"
    />
    <h4>${name}</h4>
    <p class="title">${job}</p>
    <p class="text">
      ${text}
    </p>
    <div class="quote-icon">
      <i class="fas fa-quote-right"></i>
    </div>
  </article> `;
}).join('');


const startSlidBar = (type)=>{

   const active = document.querySelector('.active');
   const last = document.querySelector('.last');
   let next = active.nextElementSibling;

   if(!next){
    next = slidecontainer.firstElementChild;
   }

   active.classList.remove(['active']);
   last.classList.remove(['last']);
   next.classList.remove(['next']);


   if(type==='prev'){

    

     active.classList.add('next');
     last.classList.add('active');
     next = last.previousElementSibling
     if(!next){
        next = slidecontainer.lastElementChild;
     }
     next.classList.add('last');

     return;
   }

   active.classList.add('last');
   last.classList.add('next');
   next.classList.add('active');


}


nxtbtn.addEventListener('click' , ()=>{
    startSlidBar()
});

prevbtn.addEventListener('click',()=>{

    startSlidBar('prev')


});