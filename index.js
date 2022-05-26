
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

const tipPerPerson = document.querySelector('.tip-value');
const totalPerPerson = document.querySelector('.total-value');

const resetBtn = document.querySelector('.btn--reset');


// Getting value from bill input
bill.addEventListener('input', (e) => {
    value = Number(e.target.value);
    console.log(value);
    return value;
})

fivePercentBtn.addEventListener('click', () => {
    let tip = ((value / 100) * 5).toFixed(2);
    tipPerPerson.innerHTML = tip;
    console.log(value);
})

tenPercentBtn.addEventListener('click', () => {
    let tip = ((value / 100) * 10).toFixed(2);
    tipPerPerson.innerHTML = tip;
})

fifteenPercentBtn.addEventListener('click', () => {
    let tip = ((value / 100) * 15).toFixed(2);
    tipPerPerson.innerHTML = tip;
})

twentyFivePercentBtn.addEventListener('click', () => {
    let tip = ((value / 100) * 25).toFixed(2);
    tipPerPerson.innerHTML = tip;
})

fiftyPercentBtn.addEventListener('click', () => {
    let tip = ((value / 100) * 50).toFixed(2);
    tipPerPerson.innerHTML = tip;
})

customBtn.addEventListener('input', (e) => {
    let customValue = Number(e.target.value);
    console.log(customValue);
    customBtn.classList.add('custom-onclick');

    let tip = ((value / 100) * customValue).toFixed(2);

    tipPerPerson.innerHTML = tip;
})

// Getting value from number of people input
peopleCountInput.addEventListener('input', (e) => {

    //Converting input from string to number
    numberOfPeople = Number(e.target.value);
    console.log(numberOfPeople);

    if (numberOfPeople === 0) {
        error.innerHTML = "Can't be zero";
        error.classList.add('error');
        peopleCountInput.classList.add('input-error');
    } else {
        error.innerHTML = '';
        error.classList.remove('error');
        peopleCountInput.classList.remove('input-error');
    }
})