// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var numberChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "`", "{", "|", "}", "~"];
var master = []
var final = ""

function generatePassword(){
  
var wantLength = prompt ("Choose length of password between 8 and 128 characters.")

if (wantLength < 8|| wantLength > 128){
  alert("Imput valid number.")
}

else if (wantLength >= 8|| wantLength <= 128){
  alert("Password will be " + wantLength + " charatcers long.")
  createPassword()
}

  function createPassword() {
    var wantNumber = confirm ("Would you like numbers?'")
  if (wantNumber){
    for (i = 0; i < numberChars.length; i++){
      master.push(numberChars[i])
    }
  }

  var wantLower = confirm ("Would you like lowercase letters?'")
  if (wantLower){
    for (i = 0; i < lowerChars.length; i++){
      master.push(lowerChars[i])
    }
  }

  var wantUpper = confirm ("Would you like uppercase letters?'")
  if (wantUpper){
    for (i = 0; i < upperChars.length; i++){
      master.push(upperChars[i])
    }
  }

  var wantSpecial = confirm ("Would you like special characters?'")
  if (wantSpecial)
    for (i = 0; i < specialChars.length; i++){
      master.push(specialChars[i])
    }

  for(m = 0; m < wantLength; m++){
    final += master[Math.floor(Math.random() * master.length)];
  }
  }

return final

}
