// Assignment code here
var passwordLength;
var lower = false;
var upper = false;
var number = false;
var symbol = false;
var run = false;
var lowerCount = 0;
var upperCount = 0;
var numberCount = 0;
var symbolCount = 0;
var randomCriteria;

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function chooseCriteria() {
  lower = window.confirm("Do you want to include lower case letters? (click 'OK' for yes, 'Cancel' for no)");
  upper = window.confirm("Do you want to include upper case letters? (click 'OK' for yes, 'Cancel' for no)");
  number = window.confirm("Do you want to include numbers? (click 'OK' for yes, 'Cancel' for no)");
  symbol = window.confirm("Do you want to include special characters? (click 'OK' for yes, 'Cancel' for no)");
  if (!lower && !upper && !number && !symbol) {
    alert("Choose at least one criteria!");
    chooseCriteria();
  } else {
    getPasswordLength();
  }
}

function getPasswordLength() {
  passwordLength = prompt("How many characters do you want your password to be? (must be at least 8 characters and no more than 128 characters)");
  console.log(passwordLength);

  if (passwordLength == null) {
    run = false;
    alert("See ya later!");
  } else if (passwordLength.length <= 0 || isNaN(passwordLength)) {
    alert("Invalid input");
    getPasswordLength();
  } else {
    if (passwordLength < 8) {
      alert("You need more characters!");
      getPasswordLength();
    } else if (passwordLength > 128) {
      alert("Too many characters!");
      getPasswordLength();
    } else {
      run = true;
      return passwordLength;
    }
  }

}

function generateRandomChar() {
  var randomChar;
  if (lower && (lowerCount == 0)) {
    randomChar = getRandomLowerCase();
    lowerCount++;
    return randomChar;
  }
  if (upper && (upperCount == 0)) {
    randomChar = getRandomUpperCase();
    upperCount++;
    return randomChar;
  }
  if (number && (numberCount == 0)) {
    randomChar = getRandomNumber();
    numberCount++;
    return randomChar;
  }
  if (symbol && (symbolCount == 0)) {
    randomChar = getRandomSymbol();
    symbolCount++;
    return randomChar;
  }
  randomCriteria = Math.floor(Math.random() * 4);
  console.log(randomCriteria);
  if (randomCriteria == 0) {
    if (lower) {
      return getRandomLowerCase();
    } else {
      return false;
    }
  } else if (randomCriteria == 1) {
    if (upper) {
      return getRandomUpperCase();
    } else {
      return false;
    }
  } else if (randomCriteria == 2) {
    if (number) {
      return getRandomNumber();
    } else {
      return false;
    }
  } else {
    if (symbol) {
      return getRandomSymbol();
    } else {
      return false;
    }
  }
}


function generatePassword() {
  chooseCriteria();
  var password = "";
  var char;
  while (run) {
    for (i = 0; i < passwordLength; i++) {
      char = generateRandomChar();
      while (char == false) {
        char = generateRandomChar();
      }
      console.log(char);
      password = password.concat(char);
    }
    run = false;
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById('password');

  passwordText.value = password;

  var lowerCount = 0;
  var upperCount = 0;
  var numberCount = 0;
  var symbolCount = 0;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);