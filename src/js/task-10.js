function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = ''; 
  
  let dimension = 30; 
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${dimension}px`;
    box.style.height = `${dimension}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(box);
    
    dimension += 10; 
  }
}

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = ''; // Clear all boxes
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

createButton.addEventListener('click', function() {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener('click', destroyBoxes);
