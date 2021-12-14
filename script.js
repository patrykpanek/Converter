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

const changeTitle = () => {
  if (one.textContent === '°C') {
    one.textContent = '°F';
    two.textContent = '°C';
    converter.value = '';
    result.textContent = '';
  } else {
    one.textContent = '°C';
    two.textContent = '°F';
    converter.value = '';
    result.textContent = '';
  }
};
const fahrToCelc = () => {
  celcius = (converter.value - 32) / 1.8;
  result.textContent = `${celcius.toFixed(1)} °C`;
  converter.value = '';
};

const celctoFahr = () => {
  fahrenheit = converter.value * 1.8 + 32;
  result.textContent = `${fahrenheit.toFixed(1)} °F`;
  converter.value = '';
};

const conversion = () => {
  if (converter.value !== '') {
    if (one.textContent === '°C') {
      celctoFahr();
    } else {
      fahrToCelc();
    }
  } else {
    result.textContent = 'Enter number...';
    result.style.color = 'red';
  }
};

const reset = () => {
  result.textContent = '';
  converter.value = '';
};

changeBtn.addEventListener('click', changeTitle);
convBtn.addEventListener('click', conversion);
resetBtn.addEventListener('click', reset);
