// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************



// ********** smooth scroll ************
// select links

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();


const navbtn = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navbtn.addEventListener('click', ()=>{
  const height = links.getBoundingClientRect().height;
  const heightContainer= linksContainer.getBoundingClientRect().height;
   if(heightContainer==0){
    linksContainer.style.height = `${height}px`;
   }else{
    linksContainer.style.height = 0;
   }
})

// ********** fixed navbar ************

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links

const scrolllink = document.querySelectorAll('.scroll-link');

scrolllink.forEach(link=>{
  link.addEventListener('click',(e)=>{
    e.preventDefault();
     const id = e.currentTarget.getAttribute('href').slice(1);
     const element = document.getElementById(id);
     const navHeight = navbar.getBoundingClientRect().height;
     const containerHeight = linksContainer.getBoundingClientRect().height;
     const fixedNav = navbar.classList.contains("fixed-nav");
     let position = element.offsetTop - navHeight;
 
     if (!fixedNav) {
       position = position - navHeight;
     }
     if (navHeight > 82) {
       position = position + containerHeight;
     }
    

     window.scrollTo ({
      left : 0 ,
      top : position
     });
     
     linksContainer.style.height = 0;
     
  })
})

