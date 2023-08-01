// button selection
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const button5 = document.querySelector(".button5");
const button6 = document.querySelector(".button6");
const button7 = document.querySelector(".button7");
const button8 = document.querySelector(".button8");
const button9 = document.querySelector(".button9");
const button0 = document.querySelector(".button0");
const buttonPlus = document.querySelector(".buttonPlus");
const buttonMinos = document.querySelector(".buttonMinos");
const buttonMulti = document.querySelector(".buttonMulti");
const buttonDivistion = document.querySelector(".buttonDivistion");
const buttonDot = document.querySelector(".buttonDot");
const buttonEquals = document.querySelector(".buttonEquals");
const acButton = document.querySelector(".acButton");
const cButton = document.querySelector(".cButton");
const openParenthesesButton = document.querySelector(".openParenthesesButton");
const closeParenthesesButton = document.querySelector(
	".closeParenthesesButton"
);

//  showing the current numbers selected
const textArea = document.querySelector(".textArea");

// the string numbers
let firstNumber = "";
let secondNumber = "";
// the  result of the operations
let result = 0;
// mangement of the currnet state
let state = 1;
let operation = "";
let parentheses = 0;

// adding the event lisernes to ther buttons
// function buttons

acButton.addEventListener("click", (e) => {
	firstNumber = "";
	secondNumber = "";
	result = 0;
	state = 1;
	operation = "";
	parentheses = 0;
	return firstNumber, secondNumber, result, state, operation, parentheses;
});
cButton.addEventListener("click", (e) => {
	if (state == 1) {
		firstNumber = "";
	} else {
		secondNumber = "";
	}
});
openParenthesesButton.addEventListener("click", (e) => {
	parentheses = parentheses + 1;
	if (state == 1) {
		firstNumber = firstNumber + " * ( ";
		console.log(firstNumber);
		return firstNumber;
	}
	if (state == 2) {
		switch (secondNumber.slice(-1)) {
			case "+":
			case "-":
			case "/":
			case "*":
				break;
			default:
				secondNumber = secondNumber + " * ( ";
				return secondNumber;
		}
		return secondNumber;
	}
	console.log(firstNumber);
	return parentheses;
});
closeParenthesesButton.addEventListener("click", (e) => {
	parentheses = parentheses - 1;
	addnumbers(")");
	return parentheses;
});

// Numberd buttons
button1.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("1");
});
button2.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("2");
});

button3.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("3");
});

button4.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("4");
});

button5.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("5");
});

button6.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("6");
});

button7.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("7");
});

button8.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("8");
});

button9.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("9");
});

button0.addEventListener("click", (e) => {
	checkTheOperation();
	addnumbers("0");
});

// opereation section
buttonPlus.addEventListener("click", (e) => {
	if (parentheses > 0) {
		addnumbers("+");
	} else {
		textArea.textContent = "";
		return (state = 2), (operation = "+");
	}
});

buttonMinos.addEventListener("click", (e) => {
	if (parentheses > 0) {
		addnumbers("-");
	} else {
		textArea.textContent = "";
		return (state = 2), (operation = "-");
	}
});

buttonMulti.addEventListener("click", (e) => {
	if (parentheses > 0) {
		addnumbers("*");
	} else {
		textArea.textContent = "";
		return (state = 2), (operation = "x");
	}
});

buttonDivistion.addEventListener("click", (e) => {
	if (parentheses > 0) {
		addnumbers("/");
	} else {
		textArea.textContent = "";
		return (state = 2), (operation = "/");
	}
});

buttonDot.addEventListener("click", (e) => {
	addnumbers(".");
});

buttonEquals.addEventListener("click", (e) => {
	if ((state = 1)) {
		result = eval(firstNumber);
	}
	if ((state = 2)) {
		number1 = eval(firstNumber);
		number2 = eval(secondNumber);
		switch (operation) {
			case "+":
				result = number1 + number2;

				break;
			case "-":
				result = number1 - number2;
				break;
			case "x":
				result = number1 * number2;
				break;
			case "/":
				result = number1 / number2;
				break;
		}
		textArea.textContent = `${result}`;
		firstNumber = `${result}`;
		secondNumber = "";
		operation = "";
	}
});

// functions
// checks if we are on the first or second number and adds the number of the button you pressed
function addnumbers(number) {
	switch (state) {
		case 1:
			firstNumber = firstNumber + number;
			textArea.textContent = `${firstNumber}`;
			break;
		case 2:
			secondNumber = secondNumber + number;
			textArea.textContent = `${secondNumber}`;
			break;
	}
}
function checkTheOperation() {
	switch (state) {
		case 2:
			if (operation == "") {
				state = 1;
				firstNumber = "";
				secondNumber = "";
				return state, secondNumber, firstNumber;
			}
		case 1:
			console.log(" state = 1");
	}
}
function checkBeforeParenthsis(string) {
	return string;
}
