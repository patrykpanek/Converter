const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

let fahrenheit;
let celcius;

// T(°F) = T(°C) × 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8
