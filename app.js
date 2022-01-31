const container = document.querySelector(".container");
const button = document.querySelector(".clearButton");
const gridItem = document.querySelectorAll(".grid-item");

function makeRows(rows, cols) {
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  }
}

makeRows(16, 16);

document.querySelectorAll(".grid-item").forEach((item) => {
  item.addEventListener("mouseenter", (e) => {
    item.classList.add("black");
  });
});

button.addEventListener("click", (e) => {
  document.querySelectorAll(".grid-item").forEach((item) => {
    item.classList.remove("black");
  });
});
