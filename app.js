const container = document.querySelector(".container");
const button = document.querySelector(".clearButton");

button.addEventListener("click", (e) => {
  //do something
});

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

const gridItem = document.querySelectorAll(".grid-item");

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    item.className = "black";
  });
});
