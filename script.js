// DOM Elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');


// Create object to call functions with
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// make the generatePassword click event
generateEl.addEventListener('click', () => {
  // get all the values of the inputs
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  
  // change the resultEl text to be the result of generatePassword with the input values as parameters
  resultEl.innerText = generatePassword(
    hasLower, 
    hasUpper, 
    hasNumber, 
    hasSymbol,
    length
  )
})

// make generatePassword function
const generatePassword = (lower, upper, number, symbol, length) => {
  // 1. Initialize password variable
  // 2. filter out unchecked types
  // 3. loop over length and call a generator function for each type
  // 4. add final password to the password variable and return it
  
  let generatedPassword = '';

  const typesCount = lower + upper + number + symbol;

  // console.log(typesCount)

  const typesArray = [{lower}, {upper}, {number}, {symbol}]
  .filter(item => Object.values(item)[0])
  console.log(typesArray)

  if(typesCount === 0) {
    return ''
  }
}

// Make Generator functions
// using character codes String.fromCharCode()
function getRandomLower() {
   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = '@#?/!$%&=+}[:';
  return symbols[Math.floor(Math.random() * symbols.length)]
}

// console.log(getRandomSymbol())