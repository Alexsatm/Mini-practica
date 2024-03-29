let operationBtns = document.querySelectorAll('.operation-btn');
let result = document.querySelector('.result');

let input1 = document.getElementById('number1')
let input2 = document.getElementById('number2')

function makeOperation(operationCode){
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);

    if(operationCode === '+'){
        result.innerHTML = number1 + number2;
    }
    if (operationCode === '-'){
        result.innerHTML = number1 - number2;
    }
    if (operationCode === '*'){
        result.innerHTML = number1 * number2;
    }
    if (operationCode === '/'){
        result.innerHTML = number1 / number2;
    }
    if (operationCode === '%'){
        result.innerHTML = number1 % number2;
    }
}

function onOperationBtnClick(e){
    let clickedElement = e.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (let i = 0; i < operationBtns.length; i++) {
    let btn = operationBtns[i]
    btn.addEventListener('click', onOperationBtnClick);
}