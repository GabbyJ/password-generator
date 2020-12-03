// Character Range Slider
const amountRange = document.getElementById("amountRange");
const amountNumber = document.getElementById("amountNumber");

//Form
const form = document.getElementById("passwordForm")

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
  const includeUppercase = uppercaseElement.checked
  const includeNumbers = numbersElement.checked
  const includeSymbols = symbolsElement.checked
  const password = generatePassword(amountNumber, includeUppercase, includeNumbers, includeSymbols )
})

//Generate Password Button
function generatePassword(amountNumber, includeUppercase, includeNumbers, includeSymbols){
  //Use ASCII instead of writing an array by hand
  //https://www.ascii-code.com
  console.log("Numbers: " + NUMBER_CHAR_CODES, "Uppercase: " + UPPERCASE_CHAR_CODES, "Lowercase: " + LOWERCASE_CHAR_CODES, "Symbols: " + SYMBOL_CHAR_CODES)
}

//ASCII array
function arrayFromLowToHigh(low, high) {
  const array = [];
  for (let i = low; i <= high; i++){
    array.push(i)
  }
  return array
}