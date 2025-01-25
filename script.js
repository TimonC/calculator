const body = document.querySelector('body');
let calculator = document.createElement('div');
let display = document.createElement('div');
let keyboard = document.createElement('div');
let inputs = document.createElement('div')
let operators = document.createElement('div')
let numbers = document.createElement('div');
let extras= document.createElement('div');


body.appendChild(calculator);
calculator.appendChild(display);
calculator.appendChild(keyboard);
keyboard.appendChild(inputs);
keyboard.appendChild(operators);
inputs.appendChild(numbers);
inputs.appendChild(extras);

calculator.id='calculator';

display.id='display';
display.style.width=`98%`;
display.style.height=`20%`;

keyboard.classList.add('button-container')
keyboard.style.width=`100%`;
keyboard.style.height=`80%`;

inputs.classList.add('button-container')
inputs.style.flexDirection='column';
inputs.style.width=`75%`;

operators.classList.add('button-container')
operators.style.flexDirection='column';
operators.style.width=`25%`;



numbers.classList.add('button-container')
numbers.style.height=`80%`
numbers.style.flexWrap = 'wrap-reverse';

extras.classList.add('button-container')
extras.style.height=`20%`
inputs.appendChild(extras);
inputs.appendChild(numbers);




let extraList = ['AC', '+/-', '%'];
let operatorList = ['/', '*', '-', '+', '='];
let numberList = ['0', '.'];
for (let i =1; i<10; i++){
    numberList.push(''+i);
}
for (let iNumber =0; iNumber<numberList.length; iNumber++){
    let span = document.createElement('span');
    span.textContent = numberList[iNumber];

    let button = document.createElement('button');
    if(numberList[iNumber]=='0'){
        button.style.minWidth=`22em`;
        button.style.flex= `2 1 auto`;
    }
    button.style.backgroundColor=`teal`;

    button.appendChild(span);
    numbers.appendChild(button);
}

for (let iExtra =0; iExtra<extraList.length; iExtra++){
    let span = document.createElement('span');
    span.textContent = extraList[iExtra];

    let button = document.createElement('button');
    button.style.backgroundColor=`blue`;

    button.appendChild(span);
    extras.appendChild(button);
}
for (let iOperator =0; iOperator<operatorList.length; iOperator++){
    let span = document.createElement('span');
    span.textContent = operatorList[iOperator];
    let button = document.createElement('button');
    button.style.backgroundColor=`orange`;

    button.appendChild(span);
    operators.appendChild(button);
}