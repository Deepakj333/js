// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const videocontainer =  document.querySelector('.video-container');
const switchbtn = document.querySelector('.switch-btn');

switchbtn.addEventListener('click',()=>{
    if(!switchbtn.classList.contains('slide')){
         switchbtn.classList.add('slide') 
         videocontainer.pause();
    }else{
       switchbtn.classList.remove('slide');
       videocontainer.play();
    }
})



const preloader = document.querySelector('.preloader');
window.addEventListener('load',()=>{
    preloader.classList.add('hide-preloader');
})


