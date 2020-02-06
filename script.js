// Assignment Code
var generateBtn = document.querySelector("#generate");
var numChoices = [0,1,2,3,4,5,6,7,8,9];
var lcChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbChoices = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "_", "`", "~", "^", "@", ",", "(", ")", "{", "|", "}"];


var charSet = [ // 4 array sets [0] [1] [2] [3]
  [true, "Lowercase"], // these are arrays [0] [1] [2]
	[true, "Numbers"],
  [true, "Uppercase"],
	[true, "Symbols"],
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





function generatePassword () {
// change "placeholder" value using "setAttribute"


}


// onclick   alert("パスワード生成ツールへようこそ、ご主人様！ Click to continue...");

// Does your password need NUMBERS? (y/n)
    // onlyLowerCase .. storevalue for charSet
    // set [1] / [1] to true

// Does your password need UPPERCASE? (y/n)
    // onlyLowerCase .. storevalue for charSet
    // set [2] / [1] to true

// Does your password need SYMBOLS? (y/n)
    // onlyLowerCase .. storevalue for charSet
    // set [3] / [1] to true

// How many characters does your password need? (8-128)
  // check, if one is not true "Please type a valid number."
    // if not a number
    // if lower than 8 or higher than 128

  // if number is true set random generator with 8-128 characters from array set [0-3], [2]
 
  // function pwSet() {
  //   var x = Math.floor((Math.random() * 121) + 8);
  //   document.getElementById(//"idk").innerHTML = x;
    // store this value

  // run a random selector from [0-3] (Number, Uppercase, Lowercase, Symbols) and value from [2]
  // loop number of times from pwSet, store each value one at a time until loop ends

  // write answer to the placeholder text



//  check for truthyness
    // [if [0] is true (always for Lowercase set)... etc]

//give computer





// for (var i = 0; i < 10; i++) 
// var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    // Randomly chooses a choice from the options array. This is the Computer's guess.


  // function randomIntMathRandom(n) {
  //   var x = Math.floor(Math.random() * n);
  //   if (x < 0 || x >= n)
  //     throw "Arithmetic exception";
  //   return x;
  // }
  


