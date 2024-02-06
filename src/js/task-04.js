let counterValue = 0;

const counter = document.getElementById('counter');
const valueSpan = document.getElementById('value');
const incrementButton = counter.querySelector('[data-action="increment"]');
const decrementButton = counter.querySelector('[data-action="decrement"]');

function updateCounter(value) {
  counterValue = value;
  valueSpan.textContent = counterValue;
}

incrementButton.addEventListener('click', function() {
  counterValue++;
  updateCounter(counterValue);
});

decrementButton.addEventListener('click', function() {
  counterValue--;
  updateCounter(counterValue);
});
