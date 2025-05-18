function add(num1, num2) {
    return num1 + num2
}

function substract(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "/":
            return Math.round(divide(num1, num2)*10)/10;
        case "*":
            return multiply(num1, num2);
    }
}


function main() {
    const buttons = document.querySelectorAll("button");
    const display = document.getElementById("display");
    let displayValue = "";
    let previousValue = "";
    let operator = "";
    let previousOperator = "";
    let operators = ["+", "-", "/", "*", "="];

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            let currentClick = button.value

            if (currentClick == "clear") {
                // clear
                displayValue = "";
                previousValue = ""
                operator = "";
                previousOperator = "";
                display.textContent = "";

            } else if(operators.includes(currentClick) === false) {
                // Add numbers to the display
                displayValue = displayValue + currentClick;
                display.textContent = displayValue;

            } else {

                previousOperator = operator
                operator = currentClick;
        
                if (previousValue == ""){
                    // First operation
                    if (operator =="="){
                        displayValue = "";
                        previousValue = ""
                        operator = "";
                        previousOperator = "";
                    } else {
                        previousValue = displayValue;
                        displayValue = "";
                        display.textContent = "";
                    }
                } else if (displayValue == ""){
                    // Do nothing when you click an operator after having a result
                } else {
                    console.log("previousValue = "+previousValue)
                    console.log("operator = "+previousOperator)
                    console.log("displayValue = "+displayValue)
                    if (previousOperator == "/" && displayValue=="0"){
                        display.textContent = "Do not divide by 0 !!"
                        displayValue = "";
                        previousValue = ""
                        operator = "";
                        previousOperator = "";
                    } else {
                        previousValue = operate(
                        Number(previousValue),
                        Number(displayValue),
                        previousOperator
                        );
                        displayValue = "";
                        display.textContent = previousValue;
                    }
                }
            }
        });
    });
}
main()


