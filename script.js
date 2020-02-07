// Assignment Code
var generateBtn = document.querySelector("#generate");
var lcChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var ucChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numChoices = [0,1,2,3,4,5,6,7,8,9];
var symbChoices = ["!", "#", "$", "%", "&", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "_", "`", "~", "^", "@", ",", "(", ")", "{", "|", "}"];

var ans = ["y", "n"]
var inc = false;

var lowerCase = false;
var upperCase = false;
var numbers = false;
var symbols = false;
var charNum = 0;

// var lowerCase = prompt ("Does your password need NUMBERS? (y/n)")
// lowerCase = lowerCase.toLowerCase();




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", letsGo);


// writePassword



function generatePassword () {
// change "placeholder" value using "setAttribute"
// );


}


function letsGo () {

  var lc = prompt("Does your password need LOWERCASE? (y/n)");
  lc = lc.toLowerCase();
  if (lc === "y" || lc === "n"){
    lowerCase = !lowerCase;
    if (lc === "y") {
      if (lc === "y");
      var lowerCase = true;
      console.log(lowerCase); 
    }
    else if (lc === "n") {

      var lowerCase = false;
      console.log(lowerCase)
    }
      
  }
   
  var uc = prompt("Does your password need UPPERCASE? (y/n)");
  uc = uc.toLowerCase();
  if (uc === "y" || uc === "n"){
    upperCase = !upperCase;
    if (uc === "y") {
      if (uc === "y");
      var upperCase = true;
      console.log(upperCase); 
    }
    else if (uc === "n") {

      var upperCase = false;
      console.log(upperCase)
    }
      
  }

  var nm = prompt("Does your password need NUMBERS? (y/n)");
  nm = nm.toLowerCase();
  if (nm === "y" || nm === "n"){
    numbers = !numbers;
    if (nm === "y") {
      if (nm === "y");
      var numbers = true;
      console.log(numbers); 
    }
    else if (nm === "n") {

      var numbers = false;
      console.log(numbers)
    }
      
  }

  var sb = prompt("Does your password need SYMBOLS? (y/n)");
  sb = sb.toLowerCase();
  if (sb === "y" || sb === "n"){
    symbols = !symbols;
    if (sb === "y") {
      if (sb === "y");
      var symbols = true;
      console.log(symbols); 
    }
    else if (sb === "n") {

      var symbols = false;
      console.log(symbols)
    }
      
  }

  var ch = prompt("How many characters does your password need? (8-128)");
    if (ch <= 128 || ch >= 8){
    var charNum = ch;
    console.log(charNum)
    }
    else {
      ch = prompt();
    }

  

}

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
  




  // var charSet = [ // 4 array sets [0] [1] [2] [3]
//   [true, "Lowercase"], // these are arrays [0] [1]
// 	[true, "Numbers"],
//   [true, "Uppercase"],
// 	[true, "Symbols"],


// Lowercase checkbox
// lowerCase.addEventListener( "change", function() {
//   if(lowerCase.checked) {
//       console.log("l")
//   } else {
//       console.log(clearInterval(lowerCase))
//   }
// });

// // Uppercase checkbox

// upperCase.addEventListener( "change", function() {
//   if(upperCase.checked) {
//       console.log("u")
//   } else {
//       console.log(clearInterval(upperCase))
//   }
// });

// // Numbers checkbox

// numbers.addEventListener( "change", function() {
//   if(numbers.checked) {
//       console.log("n")
//   } else {
//       console.log(clearInterval(numbers))
//   }
// });

// // Symbols checkbox
// // document.getElementById("symbols").addEventListener("click", displayCheck);
// symbols.addEventListener( "change", function() {
//   if(symbols.checked) {
//       console.log("s")
//   } else {
//       console.log(clearInterval(symbols))
//   }