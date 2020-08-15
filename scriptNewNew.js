// 6. select all of the DOM Elements (result, length, uppercase, lowercase, number, symbol, generate button, clipboard)
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
// 7. add a click event to the generate element
generateEl.addEventListener('click', () => {
  // a. make a length variable and get the value of the length element
  // b. make length a number (using urnary operator (+length))
  const length = +lengthEl.value
  // c. make hasLower, hasUpper, hasNumber, hasSymbol variables that grabed the .checked boolean of their corresponding elements
  const hasUpper = uppercaseEl.checked;
  const hasLower = lowercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;
  // set the innerText of the result element to generatePassword function with these variables passed in
  resultEl.innerText = generatePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol,
    length
  )
});
// 9. add an event listener to the clipboard with an anonymous function
clipboardEl.addEventListener('click', () => {
  // a. make a textArea variable that makes a new textarea element
  const textArea = document.createElement('textarea');
  // b. make a password variable that is the innertext of the result element
  const password = resultEl.innerText;
  // c. if check: if there's not password then return
  if (!password) {
    return
  }
  // d. make the value of textarea equal to password
  textArea.value = password;
  // e. appendChild textarea to the document body
  document.body.appendChild(textArea);
  // f. call select() on textArea
  textArea.select();
  // g. document.execCommand('copy')
  document.execCommand('copy');
  // h. call remove on textArea
  textArea.remove();
  // i. alert: 'password copied to clipboard' 
  alert('password copied to clipboard')
});
// 8. make generatePasswors function that takes the 5 elements
const generatePassword = (upper, lower, number, symbol, length) => {
  // 1. initialize the generatedPassword variable & set to empty
  let generatedPassword = '';
  // 2. make a typesCount variable and add the elements that have checked as their value
  const typesCount = upper + lower + number + symbol;
  // 3. make a typesArray that takes the checked elements as individual objects
  const typesArray = [{upper}, {lower}, {number}, {symbol}]
  // 4. filter typesArray and get the value (Object.values ) of each item
  .filter(item => Object.values(item)[0])
  // 5. add an if check that will check if the typesCount is 0 and if it is return an empty string
  if (typesCount === 0) {
    return '';
  }
  // 6. use a for loop that declares i as 0 and on every iteration (if i is less than length) increases i to be the same number as typesCount
  for (let i = 0; i < length; i += typesCount) {
    // a. forEach type of the typesArray set a funcName variable and make it equal to the keys of each type
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0]
      // b. take the generatedPassword string and it will be += to calling randomFunc with funcName as a parameter. call it
      return generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword
  // 7. return a finalPassword variable that slices the generatedPassword from the beginning to the length variable
}
// 5. make a randomFunc object and put the random functions inside
const randomFunc = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

// 1. make a getRandomLower function
function getRandomLower() {
  // return a random upper case letter using return 
  // String.fromCharCode using Math.floor and inside, 
  // math.random() * number of desired characters and outside add the starting charCode number
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
// 2. make a getRandomUpper function
function getRandomUpper() {
  // same as getRandomLower
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);

}
// 3. make a getRandomNumber function
function getRandomNumber() {
  // same as getRandomLower
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);

}
// 4. make a getRandomSymbol function
function getRandomSymbol() {
  // make a string variable of all the symbols you want to include
  const string = 'çåß∆˚ƒ∂≈√∫ñµ≤¢£§∞¶≠«πøü'
  return string[Math.floor(Math.random() * string.length)];
  // return a random character from the symbols string using Math floor and Math random
}