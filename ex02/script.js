const titleElement = document.getElementById("main-title");
const descriptionElement = document.querySelector(".description");
const boxElement = document.getElementById("status-box");

titleElement.textContent = "Welcome to Live DOM Tree";
descriptionElement.textContent =
  "The DOM has been successfully manipulated using JavaScript.";

titleElement.style.color = "darkblue";
descriptionElement.style.fontSize = "18px";

boxElement.textContent = "Status: Active";
boxElement.classList.add("active");
