// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
const generatePassword = () => {
  const lowerCase = "abcdefghijk";
  const upperCase = lowerCase.toLocaleLowerCase();
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialChar = "!@#$%";
  const enterNum = parseInt(prompt("How many characters would you like your password?"));

  const result = [];
  let pickedPassword = "";

  if (!enterNum) {
    alert("This needs a value");
} else if (enterNum < 8 || enterNum > 128) {
    enterNum = parseInt(prompt("You must choose between 8 and 128"));
    generatePassword();
 }

 const useNumber = confirm("Will this contain numbers?");
 if (useNumber) result.push(numbers);

 const usespecialChar = confirm("Will this contain special characters?");
 if (usespecialChar) result.push(specialChar);

 const useupperCase = confirm("Will this contain Uppercase letters?");
 if (useupperCase) result.push(upperCase);

 const uselowerCase = confirm("Will this contain Lowercase letters?");
 if (uselowerCase) result.push(lowerCase);

console.log(result);

if (result.length === 0) {
  alert("You must choose at least one option.");
  generatePassword();
}

if (result.length === 1) {
  const results = result[0];

  for (let i = 0; i < enter; i++) {
    const randIndex = Math.floor(Math.random() * results.length);
    pickedPassword += results[randIndex];
  }
   
   return pickedPassword;
}
   
   while(pickedPassword.length !== result) {
     for (let i = 0; i < result.length; i++) {
       const currentResult = result[i];
       const randIndex = Math.floor(Math.random() * currentResult.length);
       pickedPassword += currentResult[randIndex];

       if (pickedPassword.length === enterNum) return pickedPassword;
  
   }
 }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  document.querySelector("#num").textContent = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






