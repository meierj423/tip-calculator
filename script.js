let tipEl = document.querySelector("#tip-percentage");
let totalEl = document.querySelector("#meal-price");
let submitEl = document
  .querySelector("#submit")
  .addEventListener("click", handleCalculateTip);
let splitEl = document.querySelector("#num-people");
let splitBtnEl = document
  .querySelector("#split")
  .addEventListener("click", handleSplit);

function calculateTip(total, tipPercentage) {
  let roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function calculateSplit(grandTotal, peopleNum) {
  return parseFloat(grandTotal) / peopleNum;
}

function handleCalculateTip(event) {
  event.preventDefault();

  let total = parseFloat(totalEl.value);
  let tipPercentage = parseFloat(tipEl.value) * 0.01;

  let tipAmount = calculateTip(total, tipPercentage);
  let grandTotal = calculateTotal(total, tipAmount);

  document.getElementById("tip-amount").textContent = `$${tipAmount}`;
  document.getElementById("new-total").textContent = `$${grandTotal}`;
}

function handleSplit(event) {
  event.preventDefault();

  let total = parseFloat(totalEl.value);
  let tipPercentage = parseFloat(tipEl.value) * 0.01;
  let tipAmount = calculateTip(total, tipPercentage);
  let grandTotal = calculateTotal(total, tipAmount);
  let peopleNum = parseInt(splitEl.value);
  let splitAmount = calculateSplit(grandTotal, peopleNum);

  document.getElementById("split-total").textContent = `$${splitAmount}`;
}
