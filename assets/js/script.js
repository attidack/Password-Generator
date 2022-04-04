// Assignment code here
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
function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}
function generatePassword() {
  let charCodes = LOWERCASE_CHAR_CODES
  let selected = "Lowercase Characters"
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
    var includeNumbers = prompt('Type 1 for Yes and 2 for No, Would you like to include Numbers in your password?');
    includeNumbers = parseInt(includeNumbers);
      switch (includeNumbers) {
          case 1:
              charCodes = charCodes.concat(NUMBER_CHAR_CODES);
              selected = selected.concat(', and Numbers')
              window.alert("Your new password will be " +passwordLength +" characters long.  Made up of "  +selected );
              break;
          case 2:
            window.alert("Your new password will be " +passwordLength +" characters long.  Made up of "  +selected );
              break;
          default:
            window.alert("You did not pick a valid option. Try again.");
              includeNumbersOption();
          break;
      }
  
  }
  var passwordLength = passwordLegnthOption();
  includeUPPERCASEoption()
  const passwordCharacters = []
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
