const prompt = require("prompt-sync")();

let num1 = Number(prompt("Enter first number: "));
let num2 = Number(prompt("Enter second number: "));
let operator = prompt("Enter operator (+, -, *, /): ");

switch (operator) {
    case "+":
        console.log("Result:", num1 + num2);
        break;
    case "-":
        console.log("Result:", num1 - num2);
        break;
    case "*":
        console.log("Result:", num1 * num2);
        break;
    case "/":
        console.log("Result:", num1 / num2);
        break;
    default:
        console.log("Invalid operator");
}
