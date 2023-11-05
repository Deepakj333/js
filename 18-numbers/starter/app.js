const numberElement  = [...document.querySelectorAll('.number')];

console.log(numberElement);

const updateCount = (e) =>{

    const datavalue = e.dataset.value;
    const increament = Math.ceil(datavalue/1000);
    let initialValue = 0;

    const increaseCount = setInterval(()=>{
        initialValue += increament;
        if(initialValue > datavalue){
            e.textContent = `${datavalue}+`;
            clearInterval(increaseCount);
            return;
        }
        e.textContent = `${initialValue}+`;

    },1);

}



numberElement.forEach(el=>{
    updateCount(el)
});
