class Counter{
    constructor(element,value){
        this.element = element,
        this.value = value,
        this.resetBtn = element.querySelector('.reset');
        this.decreaseBtn =  element.querySelector('.decrease');
        this.increaseBtn = element.querySelector('.increase');
        this.vlaueDOM = element.querySelector('.value');
        this.vlaueDOM.textContent = this.value;
        this.increaseBtn.addEventListener('click' ,this.increase.bind(this));
        this.decreaseBtn.addEventListener('click',this.decrease.bind(this));
        this.resetBtn.addEventListener('click',this.reset.bind(this));
    }

    increase(){
        this.value++;
        this.vlaueDOM.textContent = this.value;
    }
    
    
    decrease(){
        this.value--;
        this.vlaueDOM.textContent = this.value;
    }
    
    reset(){
        this.value = 0;
        this.vlaueDOM.textContent = 0;
    }

}


const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);
