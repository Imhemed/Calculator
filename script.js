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
// state mangement
const solotionArea = document.querySelector(".solotionArea");
const body = document.querySelector("body");
let firstNumber = "";
let secondNumber = "";
let opereation = "";
let result = 0;

// adding the event lisernes to ther buttons
button1.addEventListener("click", (e) => {
	addnumbers("1");
});

button2.addEventListener("click", (e) => {
	addnumbers("2");
});

button3.addEventListener("click", (e) => {
	addnumbers("3");
});

button4.addEventListener("click", (e) => {
	addnumbers("4");
});

button5.addEventListener("click", (e) => {
	addnumbers("5");
});

button6.addEventListener("click", (e) => {
	addnumbers("6");
});

button7.addEventListener("click", (e) => {
	addnumbers("7");
});

button8.addEventListener("click", (e) => {
	addnumbers("8");
});

button9.addEventListener("click", (e) => {
	addnumbers("9");
});

button0.addEventListener("click", (e) => {
	addnumbers("0");
});

// opereation section
buttonPlus.addEventListener("click", (e) => {
	body.dataset.operation = "+";
	body.dataset.status = "2";
});

buttonMinos.addEventListener("click", (e) => {
	body.dataset.operation = "-";
	body.dataset.status = "2";
});

buttonMulti.addEventListener("click", (e) => {
	body.dataset.operation = "x";
	body.dataset.status = "2";
});

buttonDivistion.addEventListener("click", (e) => {
	body.dataset.operation = "/";
	body.dataset.status = "2";
});

buttonDot.addEventListener("click", (e) => {
	addnumbers(".");
});

buttonEquals.addEventListener("click", (e) => {
	// if ((body.dataset.status = 1)) {
	// 	solotionArea.textContent = "ENTER THE SECOND NUMBER";
	// } else {
	// 	if ((secondNumber = "")) {
	// 		solotionArea.textContent = "ENTER THE SECOND NUMBER";
	// 	} else {

	// 	}
	// }
	firstNumber = Number(firstNumber);
	secondNumber = Number(secondNumber);
	switch (body.dataset.operation) {
		case "+":
			result = firstNumber + secondNumber;
			break;
		case "-":
			result = firstNumber - secondNumber;
			break;
		case "x":
			result = firstNumber * secondNumber;
			break;
		case "/":
			result = firstNumber / secondNumber;
			break;
	}
	solotionArea.textContent = `${result}`;
	console.log(firstNumber, secondNumber);
});
// functions
// checks if we are on the first or second number and adds the number of the button you pressed
function addnumbers(number) {
	if ((body.dataset.status = 1)) {
		firstNumber = firstNumber + number;
		return firstNumber;
	} else {
		secondNumber = secondNumber + number;
		return secondNumber;
	}
}
