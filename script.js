let displayValue = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').innerText = '0';
}

function operate(operator) {
  if (displayValue !== '' && displayValue.slice(-1).match(/[0-9]/)) {
    displayValue += operator;
    document.getElementById('display').innerText = displayValue;
  }
}

function calculate() {
  if (displayValue !== '' && displayValue.slice(-1).match(/[0-9]/)) {
    const result = eval(displayValue);
    document.getElementById('display').innerText = result;
    displayValue = String(result);
  }
}
