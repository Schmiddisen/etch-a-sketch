//get the grid
let container = document.querySelector(".container-grid");
let ratioP = document.querySelector("#ratio");

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
  createGrid(prompt("How many squares per side should be in the new grid?"));
});

const resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", () => {
  removeGrid(container);
  createGrid(currentNumberOfSquares);
});

function createGrid(numberOfSquares) {
  if (numberOfSquares > 100 || numberOfSquares < 1) {
    alert("Enter a number between 1 and 100.  ");
    createGrid(currentNumberOfSquares);
    return;
  }
  let numberOfSquaresForLoop = numberOfSquares * numberOfSquares;
  for (let i = 0; i < numberOfSquaresForLoop; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridElement");
    container.appendChild(div);
  }
  currentNumberOfSquares = numberOfSquares;
  addHover();
  setGrid(numberOfSquares);
  ratioP.textContent = `Current ratio: ${numberOfSquares}x${numberOfSquares}`;
}

function setGrid(numberOfSquares) {
  let number = "auto ".repeat(numberOfSquares);
  container.style.gridTemplateColumns = number;
  container.style.gridTemplateRows = number;
}

createGrid(currentNumberOfSquares);
