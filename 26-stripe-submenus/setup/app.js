import sublinks from './data.js';

const toggleBtn = document.querySelector('.toggle-btn');
const sidebarwrapper = document.querySelector('.sidebar-wrapper');
const closeBtn = document.querySelector('.close-btn');
const sidebarlink = document.querySelector('.sidebar-links');
const submenu = document.querySelector('.submenu');
const linkBtn = [...document.querySelectorAll('.link-btn')];
const hero = document.querySelector('.hero');
const nav = document.querySelector('.nav');

toggleBtn.addEventListener('click', ()=>{
    sidebarwrapper.classList.add('show');
})

closeBtn.addEventListener('click', ()=>{
    sidebarwrapper.classList.remove('show');
})

sidebarlink.innerHTML = sublinks.map((itmes)=>{

    const {page,links} = itmes;

    return `<article >
    <h4>${page}</h4>
    <div class="sidebar-sublinks">
    ${links
      .map((link) => {
        return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
      })
      .join('')}
    </div>
    </article>`;

}).join('');

linkBtn.forEach((btn)=>{
    btn.addEventListener('mouseover' , function(e){
     const text = e.currentTarget.textContent;
     const tempBtn = e.currentTarget.getBoundingClientRect();
     const center = (tempBtn.left + tempBtn.right) / 2;
     const bottom = tempBtn.bottom - 3;

     const tempPage = sublinks.find((itmes)=>itmes.page ===text);

     if(tempPage){
      const {page,links} = tempPage;
      submenu.classList.add('show');
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;

      let columns = 'col-2';
      if (links.length === 3) {
        columns = 'col-3';
      }
      if (links.length > 3) {
        columns = 'col-4';
      }

      submenu.innerHTML = `
      <section> 
      <h4>${page}</h4>
      <div class="submenu-center ${columns}">
      ${links
        .map((link) => {
          return `<a href="${link.url}"><i class="${link.icon}"></i>${link.label}</a>`;
        })
        .join('')}
      </div>
      </section>
      `;


     }

    
    })
}
);

hero.addEventListener('mouseover',function(e){
  submenu.classList.remove('show');
})

nav.addEventListener('mouseover',function(e){
  if(!e.target.classList.contains('link-btn')){
    submenu.classList.remove('show');
  }
  //
})