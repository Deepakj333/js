const productsContainer = document.querySelector('.products-container');
const companies = document.querySelector('.companies');
const inputForm = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
let filteredProducts = [...products];


const displayProducts = ()=>{
    
    if(filteredProducts.length<1){
        productsContainer.innerHTML = `<h6>Sorry, no products matched your search</h6>`;
      return;
    }

    productsContainer.innerHTML = filteredProducts.map(
    (product)=>{
        const {title,id,image,price} = product;
    return ` <article class="product" data-id="${id}">
        <img
          src= "${image}"
          class="product-img img"
          alt=""
        />
        <footer>
          <h5 class="product-name">${title}</h5>
          <span class="product-price">${price}</span>
        </footer>
      </article>`
     }
).join('');

}

displayProducts();


const displayButtons = ()=>{
    
    const button = [
        'all',
        ...new Set(products.map(pro=>pro.company))
    ];
 
    companies.innerHTML = button.map((btn)=>{
        return `<button class="company-btn">${btn}</button>`
    }).join('');

}

displayButtons();

inputForm.addEventListener('keyup',()=>{
 const searchInputValue = searchInput.value;
 filteredProducts = products.filter((product)=>{return product.title.toLowerCase().includes(searchInputValue)})
 displayProducts();
})

companies.addEventListener('click', (e)=>{
           const companyName=e.target.textContent;
          if(companyName === 'all'){
            filteredProducts = [...products]
          }else{
      filteredProducts = products.filter((prod)=>{return prod.company.toLowerCase().includes(companyName)})
          }
          searchInput.value='';

      displayProducts();
})