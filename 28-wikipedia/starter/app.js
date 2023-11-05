import fetchdetails from "./fetchDetails/fechdetails.js";

const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const form = document.querySelector('.form');
const formInput = document.querySelector('.form-input');
const results = document.querySelector('.results');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const value = formInput.value;
    console.log(value);
    if(!value){
        results.innerHTML = '<div class="error"> please enter valid search term</div>';
      return;
    }
   fetchPages(value);
})

const fetchPages = async (value)=>{
    results.innerHTML = '<div class="loading"></div>';
    try {
        const data =await fetchdetails(`${url}${value}`);
        const result = data.query.search;


        if(result.length<1){
           results.innerHTML = '<div class="error">no matching results. Please try again</div>';
           return;
        }
       
        rendorResult(result);


    } catch (error) {
        resultsDOM.innerHTML = '<div class="error"> there was an error...</div>';
    }

} 

const rendorResult = (list)=>{

    const cardsList = list.map(item=>{

        const {title,snippet,pageid} = item;
        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
        <h4>${title}</h4>
        <p>
          ${snippet}
        </p>
      </a>`;
    }).join('');

    results.innerHTML = `<div class="articles">
    ${cardsList}
  </div>`;

}
