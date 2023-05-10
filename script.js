//calculator

const display = document.getElementById('display');
const buttons = document.getElementById('buttons');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('backspace');
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const divideButton = document.getElementById('divide');
const multiplyButton = document.getElementById('multiply');
const equalButton = document.getElementById('equal');
const squareButton = document.getElementById('square');
const rootButton = document.getElementById('root');

let lastOperation = '';
let memory = 0;

buttons.addEventListener("click", inputNumber);
function inputNumber(event) {
    if(display.textContent.length > 15){
        return;
    }
    let data = event.target.dataset.input;
    if(data){
        if(data === '.'){
            if(!display.textContent.includes('.')){
                display.textContent += data;
            }
        }
        else{
            display.textContent += data;
            if(!display.textContent.includes(".")){
                display.textContent = Number(display.textContent);
            }

        }
    }
}

clearButton.addEventListener("click", (e)=>{
    display.textContent = 0;
    lastOperation = '';
    memory = 0;
})

minusButton.addEventListener("click", (e)=>{
    lastOperation = 'minus';
    memory = Number(display.textContent);
    display.textContent = 0;
})

plusButton.addEventListener("click", (e)=>{
    lastOperation = 'plus';
    memory = Number(display.textContent);
    display.textContent = 0;
})

divideButton.addEventListener("click", (e)=>{
    lastOperation = 'divide';
    memory = Number(display.textContent);
    display.textContent = 0;
})

multiplyButton.addEventListener("click", (e)=>{
    console.log("ali")
    lastOperation = 'multiply';
    memory = Number(display.textContent);
    display.textContent = 0;
} )

equalButton.addEventListener("click", (e)=>{
    if(lastOperation == 'plus'){
        memory = Number(memory) + Number(display.textContent);
        display.textContent = memory
    }
    if(lastOperation == 'minus'){
        memory = Number(memory) - Number(display.textContent);
        display.textContent = memory
    }
    if(lastOperation == 'divide'){
        memory = Number(memory) / Number(display.textContent);
        display.textContent = memory
    }
    if(lastOperation == 'multiply'){
        memory = Number(memory) * Number(display.textContent);
        display.textContent = memory
    }
   
})

rootButton.addEventListener("click", (e)=>{
    memory = Number(display.textContent);
    display.textContent = Math.sqrt(memory);
})

squareButton.addEventListener("click", (e)=>{
    memory = Number(display.textContent);
    display.textContent = Math.pow(memory , 2);
})

backButton.addEventListener("click", (e)=>{
   display.textContent = display.textContent.slice(0, display.textContent.length - 1)
})



