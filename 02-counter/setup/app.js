
const value = document.querySelector('#value');
const btn = document.querySelectorAll('.btn');
let counter = 0;
btn.forEach(function (btnelement) {
    btnelement.addEventListener('click', function(e){
        const styles = e.currentTarget.classList; 
        console.log(styles)   
        if(styles.contains("decrease")){
              counter--;
        }else if(styles.contains("increase")){
            counter++;
        }else{
            counter = 0;
        }

      if(counter>0){
        value.style.color = "green";
      }
      if(counter<0){
        value.style.color = "red";
      }

      if(counter==0){
        value.style.color = "#222";
      }

      value.textContent = counter;

    });

});

