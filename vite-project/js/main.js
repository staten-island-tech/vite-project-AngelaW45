import "../styles/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

// D;
AOS.init();
import { menu } from "./menu";
document.querySelector("#app").innerHTML = `
  <h1>Angela's restaurant!</h1>
  <h2>Menu</h2>
`;
console.log(menu);

const DOMSelectors = {
  parent: document.querySelector("app"),
  button: document.getElementById("btn"),
  displaySection: document.getElementById("display"),
};

function card() {
  menu.forEach((food) => {
    DOMSelectors.displaySection.insertAdjacentHTML(
      "beforeend",
      `<div class="display-card">
  <h2 class= "display-name"> ${food.name} </h2>
  <h3 class= "display-type"> ${food.type} </h3>
  <h3 class= "display-vegetarian"> ${food.vegetarian} </h3>
  <h3 class= "display-price"> ${food.price} </h3>
  <h4 class= "display-img"> ${food.img} </h2>
  <h3 class= "display-stock"> ${food.instock} </h3>
  </div>`
    );
  });
}
card();

/* const product = {
.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name)
});
};
 */
