//get the grid
let container = document.querySelector(".container-grid");
let ratioP = document.querySelector("#ratio");

let currentNumberOfSquares = 16;
let color = false;
let transparency = false;

function addHover() {
  const gridElements = document.querySelectorAll(".gridElement");
  if (transparency) addTransparency();
  gridElements.forEach((gridElement) => {
    gridElement.addEventListener("mouseenter", () => {
      if (color) {
        gridElement.style.backgroundColor = `${getColorCode()}`;
      } else {
        gridElement.style.backgroundColor = "black";
      }
      if (transparency) {
        let opacity = getComputedStyle(gridElement).getPropertyValue("opacity");
        gridElement.style.opacity = `${parseFloat(opacity) + 0.1}`;
      }
    });
  });
}

function addTransparency() {
  const gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach((gridElement) => {
    gridElement.style.opacity = "0";
  });
}
function removeTransparency() {
  resetGrid();
  const gridElements = document.querySelectorAll(".gridElement");
  gridElements.forEach((gridElement) => {
    if (!transparency) gridElement.style.opacity = "1";
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
  resetGrid();
});

const colorBtn = document.querySelector(".colorBtn");
colorBtn.addEventListener("click", () => {
  if (color) {
    color = false;
    colorBtn.textContent = "Enable colors";
  } else {
    color = true;
    colorBtn.textContent = "Disable colors";
  }
});

const transparencyBtn = document.querySelector(".transparencyBtn");
transparencyBtn.addEventListener("click", () => {
  if (transparency) {
    transparency = false;
    removeTransparency();
    transparencyBtn.textContent = "Enable transparency";
  } else {
    transparency = true;
    addTransparency();
    transparencyBtn.textContent = "Disable transparency";
  }
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

function getColorCode() {
  var makeColorCode = "0123456789ABCDEF";
  var code = "#";
  for (var count = 0; count < 6; count++) {
    code = code + makeColorCode[Math.floor(Math.random() * 16)];
  }
  return code;
}

function resetGrid() {
  removeGrid(container);
  createGrid(currentNumberOfSquares);
}
