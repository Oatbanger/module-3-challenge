// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  // window prompt to set length
 var password = window.prompt("How many characters would you like your password to contain?")
  console.log (password);
   //validate answer
   if (password > 7 && password < 129) {
     //generate password function
     function foo () {};
   }
     // try again
    else {
      window.alert("Please enter a valid number between 8 and 128")
      generatePassword();
      ;
    }
   
  // window confirm to set lower case type
  var caseTypeLower = window.confirm("Include lower case?")
  console.log (caseTypeLower);
   
  // window confirm to set upper case type
  var caseTypeUpper = window.confirm("Include upper case?")
  console.log (caseTypeUpper);
  // window confirm to set special char allowance
  var specialChar = window.confirm("Include special characters?")
  console.log (specialChar);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
