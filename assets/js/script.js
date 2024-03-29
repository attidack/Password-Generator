// Assignment code here
// array to collect char codes
function arrayFromLowToHigh(low, high){
  const array = []
  for (let i = low; i <=high; i++){
    array.push(i)
  }
  return array
}
// char code lookup arrays
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
// main generate pasword function
function generatePassword() {
  let charCodes = null // start of charcode string
  let selected = "" // start of window prompt memory string
  // Password legnth prompts and logic
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
  // Start of char code options, this one is for lower case
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
  // uppercase char code options
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
  // Symbol chars option prompts
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
  // Numbers option prompts
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
            if (charCodes === null){
              window.alert("you have not selected any options for your password");
              return includeLowercaseOption();
            }else{
            window.alert("Your new password will be " +passwordLength +" characters long.  Made up of "  +selected );
              break;}
          default:
            window.alert("You did not pick a valid option. Try again.");
              includeNumbersOption();
          break;
      }
    
      
  }
  // password gen logic
  var passwordLength = passwordLegnthOption();
  includeLowercaseOption()
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
