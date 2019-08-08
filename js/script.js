// // GET ELEMENT
// var elem = function (el) {
//   if (el.charAt(0) === "#") {
//     return document.querySelector(el);
//   }
//   return document.querySelectorAll(el);
// }

// // VARIABLES

// var nums = elem(".num"),
//   result = elem("#result"),
//   ops = elem(".ops"),
//   firstNum = "",
//   secondNum = "",
//   operator,
//   resultNum,
//   eq = elem("#eq"),
//   clearBTN = elem("#clear"),
//   clearOne1 = elem("#clearOne"),
//   oper = elem("#oper"),
//   plus = elem("#plus"),
//   minus = elem("#minus"),
//   umn = elem("#umn"),
//   del = elem("#del");

// // FUNCTIONS

// function setNum() {
//   if (firstNum.charAt(0) == "0") {
//     firstNum = firstNum.replace(/0/, "");
//   }
//   firstNum += this.innerHTML;
//   result.innerHTML = firstNum;
//   eq.disabled = false;
// }

// function setOperator() {
//   secondNum = firstNum;
//   firstNum = "";
//   operator = this.getAttribute("data-ops");
//   oper.innerHTML = operator;
//   oper.classList.add("re");
//   setTimeout("oper.classList.remove('re')", 1000);
//   plus.disabled = true;
//   minus.disabled = true;
//   umn.disabled = true;
//   del.disabled = true;
// }

// function getResult() {
//   firstNum = parseFloat(firstNum);
//   secondNum = parseFloat(secondNum);
//   switch (operator) {
//     case "+":
//       resultNum = secondNum + firstNum;
//       break;

//     case "-":
//       resultNum = secondNum - firstNum;
//       break;

//     case "*":
//       resultNum = secondNum * firstNum;
//       break;

//     case "/":
//       resultNum = secondNum / firstNum;
//       break;

//     default:
//       resultNum = firstNum;
//   }
//   if (!isFinite(resultNum)) {
//     resultNum = firstNum;
//   }
//   result.innerHTML = resultNum;
//   secondNum = "";
//   firstNum = resultNum;
// }

// function clear() {
//   firstNum = "";
//   secondNum = "";
//   result.innerHTML = "";
// }

// function clearOne() {
//   firstNum = firstNum.slice(0, -1);
//   result.innerHTML = firstNum;
// }


// // LOOPS

// for (var i = 0; i < nums.length; i++) {
//   nums[i].addEventListener("click", setNum);
// }

// for (var i = 0; i < ops.length; i++) {
//   ops[i].addEventListener("click", setOperator);
// }

// // EVENTS
// eq.disabled = true;

// eq.onclick = getResult;

// clearBTN.onclick = clear;

// clearOne1.onclick = clearOne;


//operation fns;
let num1 = '';
let storeNum;
let storeOperation;
let res;
let operation;
// const addition = x => y => Number(x) + Number(y);
const addition = (x,y) => x + y;

const subtract = (x,y) => x - y;

const divide = (x,y) => x / y;

const multiply = (x,y) => x * y;

const numberClickHandler = event => {
    num1 += event.target.innerText;
    // actionElement.children[0].innerText = num1;
    // if(operation) actionElement.children[2].innerText = num1;
    
    if(operation){
        console.log(num1);
        calcAction.innerText += num1;
    }else {
        calcAction.innerText += num1;
    }
    
}

//operation variables;

const btnAddition = document.querySelector('.btn-addition');
const btnSubtract = document.querySelector('.btn-subtract');
const btnDivide = document.querySelector('.btn-divide');
const btnMultiply = document.querySelector('.btn-multiply');
const btnResult = document.querySelector('.btn-result');

const numButtons = document.querySelectorAll('.btn-num');
const operationButtons = document.querySelectorAll('.btn-operation');

const calcAction = document.querySelector('.calc-actions');

// listeners

Array.from(numButtons).forEach(numButton => {
    numButton.addEventListener('click', numberClickHandler);
})

const operationHandler = (operation) => {
    num1 = res ? res : num1;
    storeNum = operation.bind(null, +num1);
    num1 = '';
    storeOperation = operation;
}

Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener('click', function(event){
        const operationStr = this.id;
        // actionElement.children[1].innerText = operationStr;
        calcAction.innerText += operationStr;
        switch (operationStr) {
            case 'addition':
                operation = addition;
                break;
            case 'subtract':
                operation = subtract;
                break;
            case 'multiply':
                operation = multiply;
                break; 
            case 'divide':
                operation = divide;
                break;                   
            default:
                break;
        }
        operationHandler(operation);
    })
})


// btnAddition.addEventListener('click', event=>{
//     num1 = res ? res : num1;
//     storeNum = addition.bind(null, +num1);
//     num1 = '';
//     storeOperation = addition;
// })

const resultElement = document.querySelector('.calc-result');
const actionElement = document.querySelector('.calc-actions');
console.log(actionElement)

const resultHandler = storeOperation => {
    res = storeNum(+num1);
    storeNum = storeOperation.bind(null, res);
    resultElement.innerText = res;
    console.log(res);
};

btnResult.addEventListener('click', function(event){
    resultHandler(storeOperation);
})