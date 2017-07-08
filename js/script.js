// GET ELEMENT
var elem = function (el) {
  if (el.charAt(0) === "#") {
    return document.querySelector(el);
  }
  return document.querySelectorAll(el);
}

// VARIABLES

var nums = elem(".num"),
  result = elem("#result"),
  ops = elem(".ops"),
  firstNum = "",
  secondNum = "",
  operator,
  resultNum,
  eq = elem("#eq"),
  clearBTN = elem("#clear");

// FUNCTIONS

function setNum() {
  if (firstNum.charAt(0) == "0") {
    firstNum = firstNum.replace(/0/, "");
  }
  firstNum += this.innerHTML;
  result.innerHTML = firstNum;
}

function setOperator() {
  secondNum = firstNum;
  firstNum = "";
  operator = this.getAttribute("data-ops");
}

function getResult() {
  firstNum = parseFloat(firstNum);
  secondNum = parseFloat(secondNum);


  switch (operator) {
    case "plus":
      resultNum = secondNum + firstNum;
      break;

    case "minus":
      resultNum = secondNum - firstNum;
      break;

    case "umn":
      resultNum = secondNum * firstNum;
      break;

    case "del":
      resultNum = secondNum / firstNum;
      break;

    default:
      resultNum = firstNum;
  }
  result.innerHTML = resultNum;
  secondNum = 0;
  firstNum = resultNum;
}

function clear() {
  firstNum = "";
  secondNum = "";
  result.innerHTML = "";
}

// LOOPS

for (var i = 0; i < nums.length; i++) {
  nums[i].onclick = setNum;
}

for (var i = 0; i < ops.length; i++) {
  ops[i].onclick = setOperator;
}

// EVENTS

eq.onclick = getResult;

clearBTN.onclick = clear;
