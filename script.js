const body = document.querySelector('body');
let calculator = document.createElement('div');
let display = document.createElement('div');
let keyboard = document.createElement('div');
let inputs = document.createElement('div')
let operators = document.createElement('div')


body.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(keyboard);
keyboard.appendChild(inputs);
keyboard.appendChild(operators);

calculator.id='calculator';

display.style.width=`95%`;
display.style.height=`20%`;
display.style.backgroundColor=`gray`;
display.margin=`1em`;
display.style.textAlign=`right`;

keyboard.style.display='flex';
keyboard.style.width=`100%`;
keyboard.style.height=`80%`;

inputs.style.display='flex';
inputs.style.flexDirection='column';
inputs.style.maxWidth=`75%`;
inputs.style.maxHeight=`100%`;

operators.style.display='flex';
operators.style.flexDirection='column';
operators.style.maxWidth=`25%`;
operators.style.maxHeight=`100%`;




let numbers = document.createElement('div');
numbers.style.display='flex';
numbers.style.flexWrap = 'wrap-reverse';

let extras= document.createElement('div');
extras.style.display='flex';

inputs.appendChild(extras);
inputs.appendChild(numbers);




let extraList = ['AC', '+/-', '%'];
let operatorList = ['/', '*', '-', '+', '='];
let numberList = ['0', '.'];
for (let i =1; i<8; i++){
    numberList.push(''+i);
}
for (let iNumber =0; iNumber<numberList.length; iNumber++){
    let button = document.createElement('button');
    button.classList.add('number-button');
    button.textContent = numberList[iNumber];
    numbers.appendChild(button);
}
for (let iExtra =0; iExtra<extraList.length; iExtra++){
    let button = document.createElement('button');
    button.classList.add('extra-button');
    button.textContent = extraList[iExtra]
    extras.appendChild(button);
}
for (let iOperator =0; iOperator<operatorList.length; iOperator++){
    let button = document.createElement('button');
    button.classList.add('operator-button');
    button.textContent = operatorList[iOperator]
    operators.appendChild(button);
}