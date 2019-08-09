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


const actionButtons = document.querySelectorAll('.btn-action');

const actionsStore = document.querySelector('.calc-actions');

Array.from(actionButtons).forEach(actionButton => {
    actionButton.addEventListener('click', (e)=>{
        actionsStore.innerText += e.target.innerText;
    })
})

const clearStore = document.querySelector('.btn-clear');

clearStore.addEventListener('click', (e)=>{
    actionsStore.innerText = '';
})

const multiply = str => {
    let result = 1;
    const numsArray = str.split('*');
    numsArray.forEach((num, i) => {
        console.log(num);
        if (i === 0) {
            result = num;
        } else {
            result *= num;
        }
    })
    return result;
}

const divide = str => {
    let result = 0;
    const numsArray = str.split('/');
    numsArray.forEach((num, i) => {
        if(i === 0){
            result = num;
        } else {
            result /= num;
        }
    })
    return result;
};

const addition = str => {
    let result = 0;
    const numsArray = str.split('+');
    numsArray.forEach((num, i) => {
        if (i === 0) {
            result = +num;
        } else {
            result += +num;
        }
        
    })
    return result;
};

const subtract = str => {
    let result = 0;
    const numsArray = str.split('-');
    numsArray.forEach((num, i) => {
        if(i === 0){
            result = num;
        } else {
            result -= num;
        }
        
    })
    return result;
};

const simplifyExpression = (splitter, tester, operation,  inputValues) => {
    let simplified;
    const actionsArray = inputValues.split(splitter);
    actionsArray.forEach(action => {
        if (tester.test(action)) {
            const actionsResult = operation(action);
            simplified = inputValues.replace(action, actionsResult);
        }
    })
    return simplified;
}

const resultButton = document.querySelector('.btn-result');
const resultLayout = document.querySelector('.calc-result');

resultButton.addEventListener('click', (e)=>{
    let inputValues = actionsStore.innerText;

    const checkMultiply = /\*/.test(inputValues);
    if(checkMultiply){
        // const actionsArray = inputValues.split(/[-+\/]/);
        // actionsArray.forEach(action => {
        //     if(/\*/.test(action)){
        //         const actionsResult = multiply(action);
        //         inputValues = inputValues.replace(action, actionsResult);
        //     }
        // })
        inputValues = simplifyExpression(/[-\+\/]/, /\*/, multiply, inputValues);
    }

    const checkDivide = /\//.test(inputValues);
    if(checkDivide) {
        inputValues = simplifyExpression(/[-\+\*]/, /\//, divide, inputValues);
    }

    const checkSubtract = /-/.test(inputValues);
    if(checkSubtract){
        inputValues = simplifyExpression(/[\+\*\/]/, /-/, subtract, inputValues);
    }

    const checkAddition = /\+/.test(inputValues);
    if (checkAddition) {
        inputValues = simplifyExpression(/[\*\/]/, /\+/, addition, inputValues);
    }

    // console.log('res: ' + inputValues);
    resultLayout.innerText = inputValues;
    actionsStore.innerText = inputValues;
    
})
