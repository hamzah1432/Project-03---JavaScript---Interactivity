let count = 0;

const valueElement = document.getElementById("counter-value");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const btnReset = document.getElementById("btn-reset");

function updateDisplay() {
  valueElement.textContent = count;
  if (count > 0) {
    valueElement.style.color = "green";
  } else if (count < 0) {
    valueElement.style.color = "red";
  } else {
    valueElement.style.color = "black";
  }
}

btnIncrement.addEventListener("click", function () {
  count++;
  updateDisplay();
});

btnDecrement.addEventListener("click", function () {
  count--;
  updateDisplay();
});

btnReset.addEventListener("click", function () {
  count = 0;
  updateDisplay();
});
