// 6. select all of the DOM Elements (result, length, uppercase, lowercase, number, symbol, generate button, clipboard)

// 7. add a click event to the generate element
  // a. make a length variable and get the value of the length element
  // b. make length a number (using urnary operator (+length))
  // c. make hasLower, hasUpper, hasNumber, hasSymbol variables that grabed the .checked boolean of their corresponding elements
  // set the innerText of the result element to generatePassword function with these variables passed in

// 9. add an event listener to the clipboard with an anonymous function
  // a. make a textArea variable that makes a new textarea element
  // b. make a password variable that is the innertext of the result element
  // c. if check: if there's not password then return
  // d. make the value of textarea equal to password
  // e. appendChild textarea to the document body
  // f. call select() on textArea
  // g. document.execCommand('copy')
  // h. call remove on textArea
  // i. alert: 'password copied to clipboard' 

// 8. make generatePasswors function that takes the 5 elements
  // 1. initialize the generatedPassword variable & set to empty
  // 2. make a typesCount variable and add the elements that have checked as their value
  // 3. make a typesArray that takes the checked elements as individual objects
  // 4. filter typesArray and get the value (Object.values ) of each item
  // 5. add an if check that will check if the typesArray is 0 and if it is return an empty string
  // 6. use a for loop that declares i as 0 and on every iteration increases i to be the same number as typesCount
    // a. forEach type of the typesArray set a funcName variable and make it equal to the keys of each type
    // b. take the generatedPassword string and it will be += to calling randomFunc with funcName as a parameter. call it
  // 7. return a finalPassword variable that slices the generatedPassword from the beginning to the length variable

// 5. make a randomFunc object and put the random functions inside

// 1. make a getRandomLower function
  // return a random upper case letter using return 
  // String.fromCharCode using Math.floor and inside, 
  // math.random() * number of desired characters and outside add the starting charCode number

// 2. make a getRandomUpper function
  // same as getRandomLower

// 3. make a getRandomNumber function
  // same as getRandomLower

// 4. make a getRandomSymbol function
  // make a string variable of all the symbols you want to include
  // return a random character from the symbols string using Math floor and Math random

