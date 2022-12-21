import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

document.query;
AOS.init();
import { menu } from "./menu";

const DOMSelectors = {
  parent: document.querySelector("app"),
  button: document.getElementById("btn"),
  displaySection: document.getElementById("display"),
};

function card() {
  menu.forEach((food) => {
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
  });
}
card();

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

/* 
.vbtn,
.mbtn,
.abtn,
.dbtn,
.ibtn */

document.querySelector(".vbtn").addEventListener("click", function (event) {
  menu
    .filter((food) => food.vegetarian === true)
    .forEach((food) => {
      console.log(food.name, food.vegetarian);
    });
});

/* else {
  document.body.classList.add("cool");
  document.body.classList.remove("warm");
} */
