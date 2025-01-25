let leftSide = document.querySelector('#leftside');
let rightSide = document.querySelector('#rightside');
let numbers = document.createElement('div');
numbers.classList.add('button-container');
numbers.flexWrap = 'wrap-reverse';

let extras= document.createElement('div');

let operators= document.createElement('div');

leftSide.appendChild(extras);
leftSide.appendChild(numbers);
rightSide.appendChild(operators);




let extraList = ['AC', '+/-', '%'];
let operatorList = ['/', '*', '-', '+', '='];
let numberList = ['0', '.'];
for (let i =1; i<10; i++){
    numberList.push(''+i);
}
for (number in numberList){
    let button = document.createElement('button');
    button.classList.add('number-button');
    button.textContent = number;
    numbers.appendChild(button);
}
for (extra in extraList){
    let button = document.createElement('button');
    button.classList.add('extra-button');
    button.textContent = extra;
    extras.appendChild(button);
}
for (operator in operatorList){
    let button = document.createElement('button');
    button.classList.add('operator-button');
    button.textContent = operator;
    operators.appendChild(button);
}