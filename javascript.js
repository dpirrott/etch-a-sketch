function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      container.appendChild(square);
    }
  }
}

// Specify size of grid
const size = 16;

// Create overall container
const container = document.createElement('div');

// Create single square div
const square = document.createElement('div');

const body = document.querySelector('body');

generateGrid(size);
container.style.gridTemplateColumns = repeat(size, auto);
container.style.gridTemplateRows = repeat(size, auto);
body.appendChild(container);
