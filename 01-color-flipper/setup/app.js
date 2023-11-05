const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

document.addEventListener('DOMContentLoaded' ,()=>{
    document.querySelector('#btn').onclick = ()=>{
        const randomNumber = getRandomNumber();
        document.body.style.backgroundColor = colors[randomNumber];
      document.querySelector('.color').textContent = colors[randomNumber];
    }

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

});
