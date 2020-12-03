// Character Range Slider
const amountRange = document.getElementById("amountRange");
const amountNumber = document.getElementById("amountNumber");
//Include Checkboxes
const uppercaseElement = document.getElementById('uppercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');

//Character Range Slider
amountRange.addEventListener("input", syncAmount)
amountNumber.addEventListener("input", syncAmount)

function syncAmount(e){
  const value = e.target.value;
  amountNumber.value = value;
  amountRange.value = value;
}

//Include Checkboxes
form.addEventListener("submit", (e) => {
  e.preventDefault()
  const includeUppercase = uppercaseElement.checked
  const includeNumbers = numbersElement.checked
  const includeSymbols = symbolsElement.checked
  const password = generatePassword(amountNumber, includeUppercase, includeNumbers, includeSymbols )
})

//Generate Password Button
function generatePassword(amountNumber, includeUppercase, includeNumbers, includeSymbols){

}