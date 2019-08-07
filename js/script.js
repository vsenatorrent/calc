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
