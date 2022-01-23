// Assignment code here
var passwordLength;
var lower = false;
var upper = false;
var number = false;
var symbol = false;
var run = false;

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
  const symbols = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
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

  if (passwordLength == null) {
    run = false;
    alert("See ya later!");
  } else if (passwordLength.length <= 0 || isNaN(passwordLength)) {
    alert("Invalid input");
    getPasswordLength();
  } else {
    passwordLength = parseInt(passwordLength);
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
  var randomChar = '';
  var randomCriteria = Math.floor(Math.random() * 4);
  console.log(randomCriteria);
  if (randomCriteria == 1) {
    if (lower) {
      randomChar = getRandomLowerCase();
      return randomChar;
    } else {
      generateRandomChar();
    }
  } else if (randomCriteria == 2) {
    if (upper) {
      randomChar = getRandomUpperCase();
      return randomChar;
    } else {
      generateRandomChar();
    }
  } else if (randomCriteria == 3) {
    if (number) {
      randomChar = getRandomNumber();
      return randomChar;
    } else {
      generateRandomChar();
    }
  } else {
    if (symbol) {
      randomChar = getRandomSymbol();
      return randomChar;
    } else {
      generateRandomChar();
    }
  }
}


function generatePassword() {
  chooseCriteria();
  var password = '';
  var char = '';
  while (run) {
    for (i = 0; i < passwordLength.length; i++) {
      char = generateRandomChar();
      password = password.concat(char);
    }
    run = false;
  }
  console.log(password)
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);