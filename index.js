
// Getting DOM elements
const bill = document.querySelector('#bill');



const fivePercentBtn = document.querySelector('#five');
const tenPercentBtn = document.querySelector('#ten');
const fifteenPercentBtn = document.querySelector('#fifteen');
const twentyFivePercentBtn = document.querySelector('#twentyfive');
const fiftyPercentBtn = document.querySelector('#fifty');
const customBtn = document.querySelector('#custom');

const peopleCountInput = document.querySelector('#people-count');
const error = document.querySelector('.error');

let tipPerPerson = document.querySelector('.tip-value');
let totalPerPerson = document.querySelector('.total-value');

const resetBtn = document.querySelector('.btn--reset');

// Getting value from bill input
let inputValue = 0;


bill.addEventListener('input', (e) => {

    // Getting input value and converting to number
    value = Number(e.target.value);
    inputValue = value
    console.log(value);

})

let total = 0;
let people = 0;

// Getting value from number of people input
peopleCountInput.addEventListener('input', (e) => {

    //Converting input from string to number
    numberOfPeople = Number(e.target.value);
    people = numberOfPeople;

    if (numberOfPeople === 0) {
        error.innerHTML = "Can't be zero";
        error.classList.add('error');
        peopleCountInput.classList.add('input-error');
        peopleCountInput.classList.remove('input-onfocus');
    } else {
        error.innerHTML = '';
        error.classList.remove('error');
        peopleCountInput.classList.remove('input-error');
        peopleCountInput.classList.add('input-onfocus');
        let summary = (total / people).toFixed(2);
        tipPerPerson.innerHTML = summary;
        let parsedSummary = parseFloat(summary);
        let parsedTotal = parseFloat(inputValue);
        let parsedPeople = parseFloat(people);
        totalPerPerson.innerHTML = (((parsedSummary * parsedPeople) + parsedTotal) / parsedPeople).toFixed(2);
    }
})


fivePercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 5).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

tenPercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 10).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

fifteenPercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 15).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

twentyFivePercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 25).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

fiftyPercentBtn.addEventListener('click', () => {
    let tip = ((inputValue / 100) * 50).toFixed(2);
    tipPerPerson.innerHTML = tip;
    total = tip;
})

customBtn.addEventListener('input', (e) => {
    let customValue = Number(e.target.value);
    console.log(customValue);
    customBtn.classList.add('custom-onclick');

    let tip = ((value / 100) * customValue).toFixed(2);

    tipPerPerson.innerHTML = tip;
})


// Helper function to reset all elements
let reset = function() {
    bill.value = 0;
    customBtn.value = '';
    peopleCountInput.value = 0;
    tipPerPerson.innerHTML = '0.00';
    totalPerPerson.innerHTML = '0.00';
}

resetBtn.addEventListener('click', reset);