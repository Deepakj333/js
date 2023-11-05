// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navButton =  document.querySelector('.nav-toggle');
const links = document.querySelector(".links");

navButton.addEventListener('click' , ()=>{

   const result = links.classList.toggle('show-links');
   console.log(result);
   console.log(links.classList);
});


