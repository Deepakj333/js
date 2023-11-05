function getElement(selection){
    const element = document.querySelector(selection);
    if(element){
      return element;
    }else{
        throw Error (`Please check Element ${selection}`);
    }
}


function Counter(element,value){
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

Counter.prototype.increase = function (){
    this.value++;
    this.vlaueDOM.textContent = this.value;
}


Counter.prototype.decrease = function (){
    this.value--;
    this.vlaueDOM.textContent = this.value;
}

Counter.prototype.reset = function (){
    this.value = 0;
    this.vlaueDOM.textContent = 0;
}

const firstCounter = new Counter(getElement('.first-counter'),100);
//firstCounter.increaseBtn.addEventListener('click',firstCounter.increase.bind(firstCounter))
//firstCounter.decreaseBtn.addEventListener('click',firstCounter.decrease.bind(firstCounter))
const secondCounter = new Counter(getElement('.second-counter'),200);



