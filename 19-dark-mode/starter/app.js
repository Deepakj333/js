const articlesSection = document.querySelector('.articles')
const toggleBtn = document.querySelector('.btn')
//const body=document.getElementsByTagName('body')[0];
document.addEventListener('DOMContentLoaded',()=>{
    
   const articlesData = articles.map(item=>{

        const {title,date,length,snippet} = item;
        const formatDate = moment(date).format('MMMM Do, YYYY');
        return `<article class="post">
          <h2>${title}</h2>
          <div class="post-info">
            <span>${formatDate}</span>
            <span>${length} min read</span>
          </div>
          <p>
            ${snippet}
          </p>
        </article>`;
    }).join('');

    articlesSection.innerHTML = articlesData;

})

toggleBtn.addEventListener('click',()=>{
   document.documentElement.classList.toggle('dark-theme');
    //body.classList.toggle('dark-theme');
})