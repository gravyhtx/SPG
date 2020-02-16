// Assignment Code
var generateBtn = document.querySelector("#generate");



// var pwChoices = [lcChoices, ucChoices, numChoices, symbChoices]

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


// Write password to the #password input


pw = false;
console.log("pw is " + pw)

// Add event listener to generate button
generateBtn.addEventListener("click", letsGo);

function letsGo () {

  // var length = parseInt(document.getElementById("length").value, 10);
	// else if (document.getElementById("by-entropy").checked)
	// 	length = Math.ceil(parseFloat(document.getElementById("entropy").value) * Math.log(2) / Math.log(charset.length));
	// else

  var lc = prompt("Does your password need LOWERCASE? (y/n)");
  lc = lc.toLowerCase();
  if (lc === "n") {
    var lowerCase = false;
    console.log("'lowerCase' is " + lowerCase);
  }

  else {

    var lowerCase = true;
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
      console.log("'symbols' is " + symbols);
  }
  

  var ch = prompt("How many characters does your password need? (8-128)");

  if (ch <= 128 && ch >= 8){
  var charNum = ch;
  console.log(charNum);
  pw = true;
  console.log("'pw' is " + pw);
  }

  else {
    alert("You bastard");
    var charNum = null;
    console.log(charNum);
    pw = false;
    console.log("'pw' is " + pw);
    return;
  }
  
  

  function generatePassword () {
  var password = "";
  var pwChoices = [];
    // if (pw == true) 
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
    
  

  function writePassword() {
    // var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }

  
  writePassword ();
  
}
generatePassword();
}
// function genPassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }

// console.log(retVal)


// function doGenerate(ev) {
// 	ev.preventDefault();
// currentPassword = generatePassword(charset, length);
	
// 	// Calculate and format entropy
// 	var entropy = Math.log(charset.length) * length / Math.log(2);
// 	var entropystr;
// 	if (entropy < 70)
// 		entropystr = entropy.toFixed(2);
// 	else if (entropy < 200)
// 		entropystr = entropy.toFixed(1);
// 	else
// 		entropystr = entropy.toFixed(0);
	
// 	// Set output elements
// 	passwordElem.textContent = currentPassword;

// }
// function getPasswordCharacterSet() {
// 	// Concatenate characters from every checked entry
// 	var rawCharset = "";
// 	CHARACTER_SETS.forEach(function(entry, i) {
// 			rawCharset += entry[2];
	
// 	// Parse UTF-16, remove duplicates, convert to array of strings
// 	var charset = [];
// 	for (var i = 0; i < rawCharset.length; i++) {
// 		var c = rawCharset.charCodeAt(i);
// 		if (c < 0xD800 || c >= 0xE000) {  // Regular UTF-16 character
// 			var s = rawCharset.charAt(i);
// 			if (charset.indexOf(s) == -1)
// 				charset.push(s);
// 			continue;
// 		}
// 		if (0xD800 <= c && c < 0xDC00 && i + 1 < rawCharset.length) {  // High surrogate
// 			var d = rawCharset.charCodeAt(i + 1);
// 			if (0xDC00 <= d && d < 0xE000) {  // Low surrogate
// 				var s = rawCharset.substring(i, i + 2);
// 				i++;
// 				if (charset.indexOf(s) == -1)
// 					charset.push(s);
// 				continue;
// 			}
// 		}
		
// 	}
// 	return charset;
//   }


// function generatePassword(charset, len) {
// 	var result = "";
// 	for (var i = 0; i < len; i++)
// 		result += charset[randomInt(charset.length)];
// 	return result;



// // Returns a random integer in the range [0, n) using a variety of methods.
// function randomInt(n) {
// 	var x = randomIntMathRandom(n);
// 	x = (x + randomIntBrowserCrypto(n)) % n;
// 	return x;
// }


// // Not secure or high quality, but always available.
// function randomIntMathRandom(n) {
// 	var x = Math.floor(Math.random() * n);
// 	if (x < 0 || x >= n)
// 		throw "Arithmetic exception";
// 	return x;
// }

  // }
  // generatePassword (); 
  // }


    // var randomLC = lcChoices[Math.random() * lcChoices.length];
    // console.log(randomLC)
    // console.log(lcChoices)
    
    
      // for (var i = 0; i < charNum + 1; i++) {
      //   console.log("I love " + pw[i]);
    
      // }
    
               
  // }
  
      
    
      // var pwGen = [randomLC, randomUC, randomNum, randomSym]
      // console.log(pwGen)
  
      // var pwChoice = [Math.floor(Math.random() * pwGen.length)]; 
// }
    
//   }
// }
// if (pw = true); {
  
  

  
// }
  // generatePassword();
// }




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

