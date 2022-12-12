import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// D;
AOS.init();
import { menu } from "./menu";
document.querySelector("#app").innerHTML = `
  <h1>Angela's restaurant</h1>
  <h2>Hi!</h2>

`;
console.log(menu);

const DOMSelectors = {
  parent: document.querySelector("app"),
  button: document.getElementById("btn"),
};

menu.forEach((food) => {
  console.log(food.name);
});

function card() {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
  <h2 class= "display-name"> ${name} </h2>
  <h3 class= "display-type"> ${type} </h3>
  <h3 class= "display-vegetarian"> ${vegetarian} </h3>
  <h3 class= "display-price"> ${price} </h3>
  <h4 class= "display-img"> ${img} </h2>
  <h3 class= "display-stock"> ${instock} </h3>
  </div>`
  );
}
console.log(card);

/* const product = {
.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name)
});
};
 */
