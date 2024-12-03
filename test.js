// using switch
function calculator(num1, num2, operator){
    switch(operator){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '%':
            return num1%num2;
        case '/':
            if (num2 == 0){
                return "Error: Number Divided by zero";
            }else{
                return num1/num2;
            }
        default:
            return "Invalid Operator";


            }
    }
console.log(calculator(12,6,'/'))
console.log(calculator(5,9,'*'))
console.log(calculator(967,769,'+'))
console.log(calculator(85,456,'-'))
console.log(calculator(8,0,'/'))
console.log(calculator(9,8,7,'+'))
console.log(calculator(9,'*'))
console.log(calculator(93,45,'%'))


function addition(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function product(a,b){
    return a*b;
}
function divide(a,b){
    if(b === 0){
        return "Error: Divided by Zero";
    }else{
        return a/b;
    }
}

let operator = '+';
let a = 60;
let b = 97;
let result;

switch(operator){
    case '+':
        console.log(result = addition(a,b));
        break;
    case '-':
        console.log(result = subtract(a,b));
        break;
    case '*':
        console.log(result = product(a,b));
        break;
    case '/':
        console.log(result = divide(a,b));
        break;
    default:
        console.log("Invalid Operator");


}







