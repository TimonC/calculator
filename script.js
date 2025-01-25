const body = document.querySelector('body');

let calcContainer = document.createElement('div');
calcContainer.id='calculator';

let display = document.createElement('div');
display.textContent = '0';
display.id='display';
display.style.width=`98%`;
display.style.height=`20%`;

let keyboard = document.createElement('div');
keyboard.classList.add('button-container')
keyboard.style.width=`100%`;
keyboard.style.height=`80%`;

let inputs = document.createElement('div')
inputs.classList.add('button-container')
inputs.style.flexDirection='column';

let operators = document.createElement('div')
operators.classList.add('button-container')
operators.style.flexDirection='column';

let numbers = document.createElement('div');
numbers.classList.add('button-container')
numbers.style.height=`80%`
numbers.style.flexWrap = 'wrap-reverse';

let extras= document.createElement('div');
extras.classList.add('button-container')
extras.style.height=`20%`


body.appendChild(calcContainer);
calcContainer.appendChild(display);
calcContainer.appendChild(keyboard);
keyboard.appendChild(inputs);
keyboard.appendChild(operators);
inputs.appendChild(extras);
inputs.appendChild(numbers);



const calculator = {
    displayNumber: '0',
    prev: 0,
    oper: null,
    newNumber : true,
    numInsert: function(sign){
        if (this.newNumber){ 
            this.displayNumber = sign;
            this.newNumber=false;
        }
        else if(sign!='.' || !this.displayNumber.includes('.')){
            this.displayNumber = this.displayNumber + sign;
        }
        },

    operator: function(sign){
        this.newNumber=true;
        if (this.oper==null){
            this.oper=sign;
            this.prev=Number(this.displayNumber);
        }
        else{
            switch (this.oper){
                    case '/':
                        this.displayNumber = '' + parseFloat((this.prev / Number(this.displayNumber)).toFixed(9))
                        this.oper=sign;
                        this.prev=Number(this.displayNumber);
                        break;
                    case '*':
                        this.displayNumber = '' + parseFloat((this.prev * Number(this.displayNumber)).toFixed(9))
                        this.oper=sign;
                        this.prev=Number(this.displayNumber);
                        break;
                    case '-':
                        this.displayNumber = '' + parseFloat((this.prev - Number(this.displayNumber)).toFixed(9))
                        this.oper=sign;
                        this.prev=Number(this.displayNumber);
                        break;
                    case '+':
                        this.displayNumber = '' + parseFloat((this.prev + Number(this.displayNumber)).toFixed(9))
                        this.oper=sign;
                        this.prev=Number(this.displayNumber);
                        break;
                    case '=':
                        this.oper=null;
                        this.prev=0;
                        break;
                    default:
                        console.error("invalid operator sign")
                }
            }

            if (sign=='='){
                this.oper=null;
                this.prev=0;
            }
        },
    
    extra: function(sign){
        switch (sign){
            case 'AC':
                this.displayNumber = '0';
                this.prev = 0;
                this.oper = null;
                this.newNumber = true;
                break;
            case '+/-':
                this.displayNumber = '-' + this.displayNumber;
                break;
            case '%':
                this.displayNumber = '' + Number(this.displayNumber)/100;
                break;
            default:
                console.error("invalid extras sign")
        }
    },
}




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

    button.addEventListener("click", function() {
        calculator.numInsert(numberList[iNumber]);
        display.textContent=calculator.displayNumber;});

    button.appendChild(span);
    numbers.appendChild(button);
}

for (let iExtra =0; iExtra<extraList.length; iExtra++){
    let span = document.createElement('span');
    span.textContent = extraList[iExtra];
    let button = document.createElement('button');
    button.style.backgroundColor=`blue`;


    button.addEventListener("click", function() {
        calculator.extra(extraList[iExtra]);
        display.textContent=calculator.displayNumber;});
        
    button.appendChild(span);
    extras.appendChild(button);
}



for (let iOperator =0; iOperator<operatorList.length; iOperator++){
    let span = document.createElement('span');
    span.textContent = operatorList[iOperator];
    let button = document.createElement('button');
    button.style.backgroundColor=`orange`;


    button.addEventListener("click", function() {
        calculator.operator(operatorList[iOperator]);
        display.textContent=calculator.displayNumber;});

    button.appendChild(span);
    operators.appendChild(button);
}



