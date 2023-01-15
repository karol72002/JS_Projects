

const currentNumber = document.querySelector(".current-number");
const previousNumber = document.querySelector(".prev-num");
const mathSign = document.querySelector(".math-sign");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equals");

let result = "";

function displayNumbers(){
    if(this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
    if(this.textContent === "." && currentNumber.innerHTML === "") return currentNumber.innerHTML="0.";
    if(this.textContent === "0." ) return previousNumber.innerHTML = "0";

    currentNumber.innerHTML += this.textContent;
}

function operate(){
    if(currentNumber.innerHTML==="" && this.textContent === "-"){
        currentNumber.innerHTML = "-";
        return;
    }
    else if(currentNumber=== ""){
        return;
    }

    if(mathSign.innerHTML !== "") {
        showResult();
    }
    previousNumber.innerHTML = currentNumber.innerHTML;
    mathSign.innerHTML = this.textContent;
    currentNumber.innerHTML="";

}

function showResult(){
    if(previousNumber.innerHTML==="" || currentNumber.innerHTML === "") return;


    let currentNum = Number(currentNumber.innerHTML);
    let prevNum = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;

    switch(operator){
        case "+" :
            result = prevNum + currentNum;
            break;
        case "-" :
            result = prevNum - currentNum;
            break;
        case "x" :
            result = prevNum * currentNum;
            break;
        case ":" :
            result = prevNum / currentNum;
            break;
        case "^" :
            result = prevNum ** currentNum;
            break;
    }

    currentNumber.innerHTML = result;
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
}

function clearAll(){
    previousNumber.innerHTML = "";
    mathSign.innerHTML = "";
    currentNumber.innerHTML = "";

}
















// Listeners

operatorButtons.forEach((button) => {button.addEventListener("click", operate)});
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearAll);
numberButtons.forEach((button) => {
    button.addEventListener("click", displayNumbers);
}); 