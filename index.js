// Character Range Slider
const amountRange = document.getElementById("amountRange");
const amountNumber = document.getElementById("amountNumber");
//Form Action
const form = document.getElementById("passwordForm");
//Password Text
const passwordDisplay = document.getElementById("passwordDisplay")
//Checkboxes
const uppercaseElement = document.getElementById('uppercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
//ASCII Breakdown
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57);
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122);
const SYMBOL_CHAR_CODES =
  arrayFromLowToHigh(33, 47)
  .concat(arrayFromLowToHigh(58, 64))
  .concat(arrayFromLowToHigh(91, 96))
  .concat(arrayFromLowToHigh(123,126))

//Character Range Slider
amountRange.addEventListener("input", syncAmount)
amountNumber.addEventListener("input", syncAmount)

function syncAmount(e){
  const value = e.target.value;
  amountNumber.value = value;
  amountRange.value = value;
}

//Checkboxes
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const characterAmount = amountNumber.value
  const includeUppercase = uppercaseElement.checked
  const includeNumbers = numbersElement.checked
  const includeSymbols = symbolsElement.checked
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

//Generate Password Button
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols){
  //Use ASCII instead of writing an array by hand
  //https://www.ascii-code.com

  //Passwords are all lowercase by default
  let charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)

  //Randomize the characters included
  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++){
    const characterCode = charCodes[Math.floor(Math.random()*charCodes.length)]
    //Turn ASCII numbers to actual characters
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

//ASCII array
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}