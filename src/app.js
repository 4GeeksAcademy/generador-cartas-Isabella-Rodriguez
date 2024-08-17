/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  createCard();
};

function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function paloColor(palo) {
  return palo === "♥" || palo === "♦" ? "text-danger" : "text-dark";
}

const card = document.querySelector("#card");
function createCard() {
  const cardSymbols = ["♥", "♦", "♣", "♠"];
  const cardNumbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const randomPalo = getRandomElement(cardSymbols);
  const randomNumber = getRandomElement(cardNumbers);
  const paloColorValue = paloColor(randomPalo);
  const number = document.querySelector("#number");
  number.innerHTML = randomNumber;
  number.className = paloColorValue;
  const up = document.querySelector("#up");
  up.innerHTML = randomPalo;
  up.className = paloColorValue;
  const bottom = document.querySelector("#bottom");
  bottom.innerHTML = randomPalo;
  bottom.className = paloColorValue;
}

const button = document.querySelector("#button");
button.addEventListener("click", () => createCard());
