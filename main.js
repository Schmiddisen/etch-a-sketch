//get the grid
let container = document.querySelector(".container-grid");

let currentNumberOfSquares = 16;

function addHover() {
  const gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener("mouseenter", () => {
      gridElement.classList.add("hovered");
    });
  });
}

function removeGrid(parent) {
  while (parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}

const newBtn = document.querySelector(".newBtn");
newBtn.addEventListener("click", () => {
  removeGrid(container);
  createGrid(prompt("How many squares should be in the new grid?"));
});

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  removeGrid(container);
  createGrid(currentNumberOfSquares);
});

function createGrid(numberOfSquares) {
  if (numberOfSquares > 256 || numberOfSquares < 1) {
    alert("Enter a number between 1 and 256.  ");
    createGrid(currentNumberOfSquares);
    return;
  }
  for (let i = 0; i < numberOfSquares; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridElement");
    container.appendChild(div);
  }
  currentNumberOfSquares = numberOfSquares;
  addHover();
  setGrid(numberOfSquares);
}

function setGrid(numberOfSquares) {
  let number = "auto ".repeat(Math.floor(Math.sqrt(numberOfSquares, 2)));
  container.style.gridTemplateColumns = number;
  container.style.gridTemplateRows = number;
}

createGrid(currentNumberOfSquares);
