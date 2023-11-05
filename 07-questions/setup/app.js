//using selectors inside the element
// traversing the dom

//using selectors inside the element

 
const questions = document.querySelectorAll('.question');
questions.forEach(question => {
   const questionbtn = question.querySelector('.question-btn');
   questionbtn.addEventListener('click' ,()=>{
 questions.forEach(item=>{
    if(item !== question){
        item.classList.remove('show-text');
    }
    question.classList.toggle('show-text');

 }); 
});
});






// traversing the dom
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach( btn=>{
   
//    btn.addEventListener('click',(e)=>{
//     const parentele =e.currentTarget.parentElement.parentElement;
    
//     btns.forEach(ele=>{
//         console.log(ele)
//         console.log(ele !== e.currentTarget)
//         if(ele !== e.currentTarget){
//              ele.parentElement.parentElement.classList.remove('show-text');
//         }
//     })

//     parentele.classList.toggle("show-text");
// }
// );



// })
