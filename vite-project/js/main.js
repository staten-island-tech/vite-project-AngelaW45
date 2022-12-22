import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

document.query;
AOS.init();
import { menu } from "./menu";

const DOMSelectors = {
  parent: document.querySelector("app"),
  displaySection: document.getElementById("display"),
  vegetarianBtn: document.querySelector(".vbtn"),
  MainCourseBtn: document.querySelector(".mbtn"),
  AppetizerBtn: document.querySelector(".abtn"),
  DessertBtn: document.querySelector(".dbtn"),
  InStockBtn: document.querySelector(".ibtn"),
  ResetBtn: document.querySelector(".rbtn"),
  WarmBtn: document.getElementsByClassName(".wbtn"),
  CoolBtn: document.getElementsByClassName(".cbtn"),
};

function card(food) {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 class="display-name"> ${food.name} </h3>
            <h4 class="display-type"> ${food.type} </h4>
            <img class="image" src="${food.img}" />
        </div>
        <div class="flip-card-back">
          <img class="image-back" src="${food.img}" />
          <h3 class="display-vegetarian"> Vegetarian: ${food.vegetarian} </h3>
            <h3 class="display-price"> Price: ${food.price} $ </h3>
            <h4 class="display-stock"> In Stock: ${food.instock} </h3>
        </div>
      </div>
    </div>`
  );
}

function all() {
  menu.forEach((food) => {
    card(food);
  });
}
all();
function OnlyVegetarian() {
  DOMSelectors.displaySection.innerHTML = " ";
  menu
    .filter((food) => food.vegetarian === true)
    .forEach((food) => {
      card(food);
    });
}
function OnlyMainCourse() {
  DOMSelectors.displaySection.innerHTML = " ";
  menu
    .filter((food) => food.type === "Main Course")
    .forEach((food) => {
      card(food);
    });
}
function OnlyAppetizer() {
  DOMSelectors.displaySection.innerHTML = " ";
  menu
    .filter((food) => food.type === "Appetizer")
    .forEach((food) => {
      card(food);
    });
}
function OnlyInStock() {
  DOMSelectors.displaySection.innerHTML = " ";
  menu
    .filter((food) => food.instock === true)
    .forEach((food) => {
      card(food);
    });
}
function OnlyDessert() {
  DOMSelectors.displaySection.innerHTML = " ";
  menu
    .filter((food) => food.type === "Dessert")
    .forEach((food) => {
      card(food);
    });
}
function Reset() {
  DOMSelectors.displaySection.innerHTML = " ";
  all();
}

DOMSelectors.vegetarianBtn.addEventListener("click", function () {
  OnlyVegetarian();
});
DOMSelectors.MainCourseBtn.addEventListener("click", function () {
  OnlyMainCourse();
});
DOMSelectors.AppetizerBtn.addEventListener("click", function () {
  OnlyAppetizer();
});
DOMSelectors.DessertBtn.addEventListener("click", function () {
  OnlyDessert();
});
DOMSelectors.InStockBtn.addEventListener("click", function () {
  OnlyInStock();
});
DOMSelectors.ResetBtn.addEventListener("click", function () {
  Reset();
});

/* DOMSelectors.document
  .querySelector(".vbtn")
  .addEventListener("click", function OnlyVegetarian() {
    DOMSelectors.displaySection.innerHTML = "";

    menu
      .filter((food) => food.vegetarian === true)
      .forEach((food) => {
        DOMSelectors.displaySection.insertAdjacentHTML(
          menu.forEach((food) => {
            */

document.querySelector(".wbtn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  }
});

document.querySelector(".cbtn").addEventListener("click", function () {
  if (document.body.classList.contains("warm")) {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});
