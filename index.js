let buttonPlus = document.getElementById("buttonPlus");
let buttonMinus = document.getElementById("buttonMinus");
let buttonMultiply = document.getElementById("buttonMultiply");
let buttonDevide = document.getElementById("buttonDevide");

    let input1 = document.getElementById("number1");
    let input2 = document.getElementById("number2");
    
    function getNumber1(){
        return Number(input1.value);
    }
    function getNumber2(){
        return Number(input2.value);
    }

function onButtonPlusClick() {
    let result = getNumber1() + getNumber2();
    window.alert(result);
}
function onButtonMinusClick() {
    let result = getNumber1() - getNumber2();
    window.alert(result);
}
function onButtonMultiplyClick() {
    let result = getNumber1() * getNumber2();
    window.alert(result);
}
function onButtonDevideClick() {
    let result = getNumber1() / getNumber2();
    window.alert(result);
}

buttonPlus.addEventListener("click", onButtonPlusClick);
buttonMinus.addEventListener("click", onButtonMinusClick);
buttonMultiply.addEventListener("click", onButtonMultiplyClick);
buttonDevide.addEventListener("click", onButtonDevideClick);