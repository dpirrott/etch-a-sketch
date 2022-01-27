// function hoverOut() {

// }

function hoverIn(e) {
  let currentSquare = e.srcElement;
  if (currentSquare.style.backgroundColor === "") {
    let redCode = (Math.random()) * 255;
    let greenCode = (Math.random()) * 255;
    let blueCode = (Math.random()) * 255;
    currentSquare.style.backgroundColor = "rgb(" + redCode + ", " + greenCode + ", " + blueCode + ")";
  }else if (currentSquare.style.backgroundColor !== "black") {
    console.log(currentSquare.style.backgroundColor);
    let color = currentSquare.style.backgroundColor;
    let stringToSplit = color.slice(4, color.length - 1);
    let redGreenBlue = stringToSplit.split(", ");
    let tempArray = [];
    redGreenBlue.forEach(color => {
      tempArray.push(color - 0.1 * 255);
    });
    tempArray.forEach((color, index) => {
      redGreenBlue[index] = color;
    });
    redCode = redGreenBlue[0];
    greenCode = redGreenBlue[1];
    blueCode = redGreenBlue[2];
    currentSquare.style.backgroundColor = "rgb(" + redCode + ", " + greenCode + ", " + blueCode + ")";
    console.log(currentSquare.style.backgroundColor);
  }
  
}

function attachContainer() {
  container.id = "container";
  container.style.gridTemplateColumns = 'repeat(' + size + ', auto)';
  container.style.gridTemplateRows = 'repeat(' + size + ', auto)';
  body.appendChild(container);
}

function clearGrid() {
  while (container.childElementCount > 0) {
    container.removeChild(container.firstChild);
  }
  body.removeChild(container);
}

function setupEventListeners() {
  let squares = container.childNodes;
  squares.forEach(square => {
    square.addEventListener('mouseenter', hoverIn);
    //square.addEventListener('mouseleave', hoverOut)
  });
  
}

// Generate square grid of given size
function generateGrid(size) {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      square.className = 'square';
      container.appendChild(square);
      square = document.createElement('div');
    }
  }
}

// Specify size of grid
let size = 16;

// Retrieve reset button to set up event listener
const resetBtn = document.querySelector('#reset');

// Create overall container
const container = document.createElement('div');

// Create single square div
let square = document.createElement('div');

// Need body element so that total container can be appended
const body = document.querySelector('body');

generateGrid(size);

// Setup event listeners for each of containers child divs
setupEventListeners();

attachContainer();

resetBtn.addEventListener('click', () => {
  size = prompt('Specify desired size of grid (100 max)');
  size = size > 100 ? 100 : size;
  clearGrid();
  generateGrid(size);
  setupEventListeners();
  attachContainer();
});

