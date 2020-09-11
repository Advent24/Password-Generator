// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {

  var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"];

  function getlower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

  function getUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }

  function getNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }

  function getSpecial(){
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
  }
  
  

  function chooseLength (){
  var numberLength = prompt ("Choose length of password between 8 and 120 characters.");
    if(numberLength < 8){
      alert ("Invalid imput.")
    }
    else if(numberLength < 120){
      alert(valid)
    }
    else(numberLength > 120);{
      alert ("Invalid imput.")
    }
  }

  

    
  

  prompt ("Choose length of password between 8 and 120 characters.")
  confirm ("Would you like lowercase letters?'")
  confirm ("Would you like uppercase letters?'")
  confirm ("Would you like numeric characters?'")
  confirm ("Would you like special characters?'")
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







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
