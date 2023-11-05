import fetchFollowers from './fetchFollowers.js'
import displayFollowers from './displayFollowers.js'
import paginate from './paginate.js'
import displayButtons from './displayButtons.js'

const sectiontitle = document.querySelector('.section-title h1');
const btncontainer = document.querySelector('.btn-container');

let index = 0;
let pages = []; 

const setUpUI =()=>{
    displayFollowers(pages[index]);
    displayButtons(btncontainer,pages,index);
}

const init = async () =>{
   const followers = await fetchFollowers();
   sectiontitle.textContent = 'Pagination';
   pages = paginate(followers);
   setUpUI();
}

btncontainer.addEventListener('click',function(e){
    if(e.target.classList.contains('btn-container'))
      return;

    if(e.target.classList.contains('page-btn')){
      index= parseInt(e.target.dataset.index);
    }

    if(e.target.classList.contains('next-btn')){
        index++;
        if(index > pages.length -1 ){
            index=0;
        }
    }
    if(e.target.classList.contains('prev-btn')){
        index--;
        if(index < 0){
            index = pages.length -1 ;
        }
    }



    setUpUI();
})

window.addEventListener('load',init);