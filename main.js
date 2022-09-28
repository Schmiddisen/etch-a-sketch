//get the grid
let container = document.querySelector(".container-grid");

createGrid(16);

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

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  removeGrid(container);
  createGrid(prompt("How many squares should be in the new grid? (Max. 100)"));
});

function createGrid(numberOfSquares) {
  if (numberOfSquares > 100 || numberOfSquares < 1) {
    alert("A maximum of 100 squares is allowed. ");
    return;
  }
  for (let i = 0; i < numberOfSquares; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridElement");
    container.appendChild(div);
  }
  addHover();
  setGrid(numberOfSquares);
}

function setGrid(numberOfSquares) {
  let number = "auto ".repeat(Math.floor(Math.sqrt(numberOfSquares, 2)));
  container.style.gridTemplateColumns = number;
  container.style.gridTemplateRows = number;
}
