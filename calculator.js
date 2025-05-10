function add(num1,num2) {
    return num1+num2
}

function substract(num1,num2) {
    return num1 - num2
}

function divide(num1,num2) {
    return num1/num2
}

function multiply(num1,num2) {
    return num1*num2
}

function operate(num1,num2,operator) {
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return substract(num1,num2);
        case "/":
            return divide(num1,num2);
        case "*":
            return multiply(num1,num2);
    }
}


function main() {
    const buttons = document.querySelectorAll("button");
    const display = document.getElementById("display");
    let displayValue = "";
    let previousValue = "";
    let operator = ""
    let operators = ["+","-","/","*"];

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            let currentClick = button.value
            if (currentClick === "=") {

                
                display.textContent = operate(Number(previousValue),Number(displayValue),operator);

            } else if (operators.includes(currentClick) === false) {

                // Continue to regiter the number
                displayValue = displayValue + button.value;
                display.textContent = displayValue;

            } else if(operators.includes(currentClick) === true) {

                operator = currentClick;
                previousValue = displayValue;
                display.textContent = "";
                displayValue = "";
                console.log(previousValue);

            }
        });
    });
}



main()


