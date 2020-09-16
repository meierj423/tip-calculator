// use document.querySelector to get references to the
// tip percent, total, submit, and split elements
// var tipEl = document.querySelector("#tip-percentage");
// var totalEl = ???
// var submitEl = ???
// var splitEl = ???

// Returns tip for given total and tip %
function calculateTip(total, tipPercentage) {
  // calculate the dollar amount and convert to a string with two decimal places
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

// Return total amount including tip
function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

// Handle click on calculate tip button
function handleCalculateTip(event) {
  // prevent the default form behavior (prevents page from reloading)
 

  // get values from inputs for tip percentage and total
  
  // use calculateTip and calculateTotal to determine the tip amount
  // and total amount

  // display the tip amount and total (update the DOM)
}


// add click listener for the submitEl which runs handleCalculateTip


