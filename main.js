
// declaring all necessary fields into variables
let bill = document.querySelector("input[name=bill]");
let tip = document.querySelectorAll("li > button");
let custom = document.querySelector("input[name=custom]");
let numberOfPeople = document.querySelector("input[name=number-of-people]")
let resetButton = document.querySelector(".reset")
let tipValue = 0;
let numberOfPeopleValue = 1;
let billValue = 0;

// declaring the targets for the results
let targetTipAmount = document.querySelector(".tip-result .target")
let targetTotal = document.querySelector(".total .target")


// determine the total of the bill
bill.addEventListener("keyup", () => {
	billValue = Number(bill.value);
	displayResult(billValue, tipValue, numberOfPeopleValue)
})

// remove active states if the custom field is clicked
custom.addEventListener("click", () => {
	tip.forEach(button => {
		button.classList.remove("active");
	})
})

custom.addEventListener("keyup", () => {
	tipValue = custom.value;
	displayResult(billValue, tipValue, numberOfPeopleValue)
})

// determine the tip value if the custom field is filled
custom.addEventListener("keyup", () => {
	tipValue = Number(custom.value);
})

// determine the tip value if a button is clicked
tip.forEach(button => {
	button.addEventListener("click",() => {

		tip.forEach(button => {
			button.classList.remove("active");
		})
		
		// get the tip value in number format and without the percent sign
		tipValue = Number(button.textContent.slice(0, -1));
		button.classList.toggle("active");

		
		displayResult(billValue, tipValue, numberOfPeopleValue)
	})
})

// get the number of people for the bill
numberOfPeople.addEventListener("keyup", () => {
	numberOfPeopleValue = Number(numberOfPeople.value);
	displayResult(billValue, tipValue, numberOfPeopleValue)
})

// creating logic for the reset button 
resetButton.addEventListener("click", () => {
	bill.value = ""
	tip.value = ""
	custom.value = ""
	numberOfPeople.value = 0

	tip.forEach(button => {
		button.classList.remove("active")
	})
	
	tipValue = 0;
	numberOfPeopleValue = 1;
	billValue = 0;
	
	displayResult(billValue, tipValue, numberOfPeopleValue)
})

// making a function to display the results in the targets locations
function displayResult(billValue, tipValue, numberOfPeopleValue) {
	let tip = billValue * (tipValue / 100) / numberOfPeopleValue;
	let total = billValue / numberOfPeopleValue
	targetTipAmount.textContent = tip.toFixed(2)
	targetTotal.textContent = total.toFixed(2)
}
