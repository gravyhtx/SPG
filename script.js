// Assignment Code
var generateBtn = document.querySelector("#generate");



var lowerCase = false;
var upperCase = false;
var numbers = false;
var symbols = false;


var lcChoices;
var ucChoices;
var numChoices;
var symbChoices;
var CHARACTER_SETS = [
	[false, "Numbers", "0123456789"],
	[false, "Lowercase", "abcdefghijklmnopqrstuvwxyz"],
	[false, "Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
	[false, "ASCII symbols", "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"],
	[false, "Space", " "],
];


pw = false;
console.log("pw is " + pw)

// Add event listener to generate button
generateBtn.addEventListener("click", letsGo);

function letsGo () {

  var check = 0;
  
  var lc = prompt("Does your password need LOWERCASE? (y/n)");
  lc = lc.toLowerCase();
  if (lc === "n") {
    var lowerCase = false;
    console.log("'lowerCase' is " + lowerCase);
  }

  else {

    var lowerCase = true;
    var check = +1;
    console.log("'lowerCase' is " + lowerCase);
  }
   
  var uc = prompt("Does your password need UPPERCASE? (y/n)");
  uc = uc.toLowerCase();
  if (uc === "n") {
    var upperCase = false;
    console.log("'upperCase' is " + upperCase);
  }

  else {
    var upperCase = true;
    var check = +1;
    console.log("'upperCase' is " + upperCase);
  }

  var nm = prompt("Does your password need NUMBERS? (y/n)");
  nm = nm.toLowerCase();
  if (nm === "n") {
    var numbers = false;
    console.log("'numbers' is " + numbers);
  }

  else {
    var numbers = true;
    var check = +1;
    console.log("'numbers' is " + numbers);
  }

  var sb = prompt("Does your password need SYMBOLS? (y/n)");
  sb = sb.toLowerCase();

  if (sb === "n") {
      var symbols = false;
      console.log("'symbols' is " + symbols);
  }

  else {
      var symbols = true;
      var check = +1;
      console.log("'symbols' is " + symbols);
  }
  
  if (check==0) {
  alert("Try again.");
  var charNum = null;
  console.log(charNum);
  pw = false;
  console.log("'pw' is " + pw);
  return;
  }

  var ch = prompt("How many characters does your password need? (8-128)");
  
  if (ch <= 128 && ch >= 8){
  var charNum = ch;
  console.log(charNum);
  pw = true;
  console.log("'pw' is " + pw);
  }

  else {
    alert("Try again.");
    var charNum = null;
    console.log(charNum);
    pw = false;
    console.log("'pw' is " + pw);
    return;
  }
  
  

  function generatePassword () {
  var password = "";
  var pwChoices = [];
    if (lowerCase == true) {
      pwChoices.push("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",);
      
    }
    if (upperCase == true) {
      pwChoices.push("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",);

    }
    if (numbers == true) {
      pwChoices.push(0,1,2,3,4,5,6,7,8,9,);

    }
    if (symbols == true) {
      pwChoices.push("!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "_", "`", "~", "^", "@", ",", "(", ")", "{", "|", "}",);
    }

    for (var i = 0; i < (charNum); i++) {
      
      password += pwChoices[Math.floor(Math.random() * pwChoices.length)];

      // Display in console
      console.log(password);
    }
    
  
  // Write password to the #password input
  function writePassword() {
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  
  writePassword ();
  
}
generatePassword();
}

// if (pw = true) {

// }