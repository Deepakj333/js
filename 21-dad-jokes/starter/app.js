const url = 'https://icanhazdadjoke.com/';

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

btn.addEventListener('click',async ()=>{
    jokes()
})


 document.addEventListener('DOMContentLoaded', async ()=>{jokes()});

 jokes = async ()=>{

 try{

    await fetch(url,{headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },})
    .then(response => {
        if(!response.ok){
            throw new Error('there was an error');
        }
       return response.json()
    })
    .then(data=> {
        result.textContent = data.joke;
    })

  }catch(error){
    result.textContent = 'Sorry Not Able to Fetch'
  }
 }

 result.textContent = 'Loadind....';
