import "./scss/style.scss";
import { getCoins } from "./src/getCoins";
// Selector
const form = document.querySelector("form");

// Event
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getCoinsData();
  event.target.reset();
});

const getCoinsData = () => {
  const input = document.querySelector("header form input").value;
  if (!input.trim()) {
    alert("Input area can not be empty.");
  } else {
    getCoins(input);
  }
};
