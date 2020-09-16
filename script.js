let tipEl = document.querySelector("#tip-percentage");
let totalEl = document.querySelector("#meal-price");
let submitEl = document
  .querySelector("#submit")
  .addEventListener("click", handleCalculateTip);
// let splitEl = ???

// Returns tip for given total and tip %
function calculateTip(total, tipPercentage) {
  // calculate the dollar amount and convert to a string with two decimal places
  let roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

// Return total amount including tip
function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

// Handle click on calculate tip button
function handleCalculateTip(event) {
  event.preventDefault();

  let total = parseFloat(totalEl.value);
  let tipPercentage = parseFloat(tipEl.value) * 0.01;

  let tipAmount = calculateTip(total, tipPercentage);
  let grandTotal = calculateTotal(total, tipAmount);

  document.getElementById("tip-amount").textContent = `$${tipAmount}`;
  document.getElementById("new-total").textContent = `$${grandTotal}`;
}
