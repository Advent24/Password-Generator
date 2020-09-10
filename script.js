// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  prompt ("Choose length of password between 8 and 120 characters.")
  confirm ("Would you like lowercase letters?'")
  confirm ("Would you like uppercase letters?'")
  confirm ("Would you like numeric characters?'")
  confirm ("Would you like special characters?'")
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var number = [0,1,2,3,4,5,6,7,8,9]



// generate passwords function and returns password

// send prompt for length

// send confirm promts 

// when completed with prompts then password is created based on them

// create arrays with all neccessary characters

// create a var that holds all the criteria that the user has imputed

// create a condintation situation that saves all the chosen characters from the confirm to a new collection

// add validations to make sure at least on character is selected 

// add validation for length of the password between 8 and 120



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
