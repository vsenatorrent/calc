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


// display data

const actionLayout = document.querySelector('.calc-actions');

const resultLayout = document.querySelector('.calc-result');

const addition = (x,y) => x + y;

const subtract = (x,y) => x - y;

const divide = (x,y) => x / y;

const multiply = (x,y) => x * y;

let result = 0;
let action;

// numbers

let num1 = '';
let num2;


const numButtons = document.querySelectorAll('.btn-num');

const numButtonHandler = (event) => {
    num1 += event.target.innerText;
    // if(num2)
    //     resultButtonHandler(action);
    // console.log(num1);
}

Array.from(numButtons).forEach(numButton => {
    numButton.addEventListener('click', numButtonHandler)
})

// operations

const operationButtons = document.querySelectorAll('.btn-operation');

const operationButtonHandler = (event) => {
    const operation = event.target.id;
    let actionSymbol;
    if(operation == 'addition'){
        action = addition;
        actionSymbol = '+';
    }
        
    if(operation == 'subtract'){
        action = subtract;
        actionSymbol = '-';
    }
        
    if(operation == 'multiply'){
        action = multiply;
        actionSymbol = '*';
    }
        
    if(operation == 'divide'){
        action = divide;
        actionSymbol = '/';
    }

    // actionLayout.innerHTML += num1;
    // actionLayout.innerText += actionSymbol;
    num2 = num1;
    num1 = '';
}

Array.from(operationButtons).forEach(operationButton => {
    operationButton.addEventListener('click', operationButtonHandler);
});

// result 

const resultButton = document.querySelector('.btn-result');

const resultButtonHandler = (callback) => {
    result = callback(+num2, +num1);
    resultLayout.innerText = result;
    num1 = result;
    // console.log(result);
}

const displayResult = () => {
    resultButtonHandler(action);
    console.log(result);
}

resultButton.addEventListener('click', displayResult);