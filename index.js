// Character Range Slider
const amountRange = document.getElementById("amountRange");
const amountNumber = document.getElementById("amountNumber");

amountRange.addEventListener("input", syncAmount)
amountNumber.addEventListener("input", syncAmount)

function syncAmount(e){
  const value = e.target.value;
  amountNumber.value = value;
  amountRange.value = value;
}
