const rowNum = 20;
const colNum = 40;
let container = document.querySelector(".container");

for (let i = 0; i < rowNum; i++) {
  let row = document.createElement("div");
  row.classList.add("row");

  for (let j = 0; j < colNum; j++) {
    let col = document.createElement("div");
    col.classList.add("square");
    col.classList.add("disappear");
    row.appendChild(col);
  }
  container.appendChild(row);
}

function generateRandomNumber() {
  return 0 + Math.floor((255 - 0) * Math.random());
}

function generateRandomColor() {
  let randomColor = `rgb(${generateRandomNumber()},${generateRandomNumber()},${generateRandomNumber()})`;
  return randomColor;
}

let allCols = document.querySelectorAll(".square");

allCols.forEach((col) => {
  col.addEventListener("mouseover", () => {
    col.style.backgroundColor = generateRandomColor();
  });

  col.addEventListener("mouseout", () => {
    setTimeout(() => {
      col.style.backgroundColor = "#1d1d1d";
    }, 1000);
  });
});