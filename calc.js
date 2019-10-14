let currentVal = 0;
let prevVal;
let output;
let result = 0;
var operation = 0;
let isDecimalPressed = false;
var decimalCount = 1;

function numpressed(num){
    if(isDecimalPressed){
        document.getElementById("output").value += num;
        num /= 10**decimalCount;
        decimalCount++;
        currentVal += num;
        currentVal = round(currentVal, decimalCount - 1);
    }
    else{
        currentVal *= 10;
        currentVal += num;
        document.getElementById("output").value = currentVal;
    }
}

function decimalpressed(){
    document.getElementById("output").value += ".";
    isDecimalPressed = true;
}

function clearR(){
    currentVal = 0;
    document.getElementById("output").value = currentVal;
    operation = 0;
    decimalCount = 1;
    prevVal = 0;
    result = 0;
    isDecimalPressed = false;
}

function operate(type){
    if(operation != 0){
        switch(operation){
            case 'addition':
                result += currentVal;
                break;
            case 'substraction':
                result -= currentVal;
                break;
            case 'multiplication':
                result *= currentVal;
                break;
        }
        document.getElementById("output").value = result;
    }
    if (result == 0){
        result += currentVal;
    }
    operation = type;
    prevVal = currentVal;
    currentVal = 0;
    if(operation == 'percent'){
        result /= 100;
        document.getElementById("output").value = result;
    }
}

function round(value, decimals){
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }

function equal(){
    switch(operation){
        case 'addition':
            result += currentVal;
            break;
        case 'substraction':
            result -= currentVal;
            break;
        case 'multiplication':
            result *= currentVal;
            break;
        case 'division':
            result /= currentVal;
            break;
    }
    operation = 0;
    currentVal = 0;
    decimalCount = 1;
    isDecimalPressed = false;
    document.getElementById("output").value = result;
}