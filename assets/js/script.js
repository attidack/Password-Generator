// Assignment code here
// array to hold char types
function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}
// defining chars through codeChar into arrays
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// Main function
function generatePassword() {
<<<<<<< HEAD
  let charCodes = LOWERCASE_CHAR_CODES // Default case is lower case
  let selected = "Lowercase Characters" // Option tracking
  // Password Prompt
=======
  let charCodes = null
  let selected = ""
>>>>>>> develop
  function passwordLegnthOption(){
    const passwordLength = prompt('Please enter a password length (between 8 and 128)');
    if (passwordLength <= 7){
      window.alert('Not matched, the number was '+passwordLength +', please enter a number between 8 and 128');
      return passwordLegnthOption();
    }if (passwordLength >= 129){
      window.alert('Not matched, the number was '+passwordLength +', please enter a number between 8 and 128');
      return passwordLegnthOption();
    }
    else{
      console.log(passwordLength)
      return passwordLength;
      }
  }
<<<<<<< HEAD
  // Character type selection prompts
=======
  function includeLowercaseOption (){
    var includeLowercase = prompt('Type 1 for Yes and 2 for No, Would you like to include lowercase Characters in your password?');
    includeLowercase = parseInt(includeLowercase);
      switch (includeLowercase) {
          case 1:
              charCodes = LOWERCASE_CHAR_CODES;
              selected = selected.concat('Lowercase Characters')
              includeUPPERCASEoption();
              break;
          case 2:
              includeUPPERCASEoption();
              break;
          default:
              window.alert("You did not pick a valid option. Try again.");
              includeLowercaseOption();
          break;
      }
  
  }
>>>>>>> develop
  function includeUPPERCASEoption (){
    var includeUPPERCASE = prompt('Type 1 for Yes and 2 for No, Would you like to include UPPERCASE in your password?');
    includeUPPERCASE = parseInt(includeUPPERCASE);
      switch (includeUPPERCASE) {
          case 1:
              charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
              selected = selected.concat(', Uppercase Characters')
              includeSymbolsoption();
              break;
          case 2:
              includeSymbolsoption();
              break;
          default:
              window.alert("You did not pick a valid option. Try again.");
              includeUPPERCASEoption();
          break;
      }
  
  }
  function includeSymbolsoption (){
    var includeSymbols = prompt('Type 1 for Yes and 2 for No, Would you like to include Symbols in your password?');
    includeSymbols = parseInt(includeSymbols);
      switch (includeSymbols) {
          case 1:
              charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
              selected = selected.concat(', Symbol Characters')
              includeNumbersOption();
              break;
          case 2:
            includeNumbersOption();
              break;
          default:
              window.alert("You did not pick a valid option. Try again.");
              includeSymbolsoption();
          break;
      }
  
  }
  function includeNumbersOption (){
    var includeNumbers = prompt('Type 1 for Yes and 2 for No, Would you like to include Numbegit   const passwordCharacters = []
  for (let i = 0; i < passwordLength; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
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
