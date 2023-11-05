const tabbtn = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');
tabbtn.forEach(btn=>{
    btn.addEventListener('click',e=>{
        const btnid = e.currentTarget.dataset.id;
        
        content.forEach(c=>{
           if(c.getAttribute("id") == btnid){
              c.classList.add('active');
           }else{
            c.classList.remove('active');
           }
        })
      tabbtn.forEach(b=>{
        if(b.dataset.id === btnid){
            b.classList.add('active');
        }else{
            b.classList.remove('active');
        }
      })
    })   
})

