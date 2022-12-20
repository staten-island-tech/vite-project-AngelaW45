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
      `<div class="display-card" data-aos="flip-up">
  <h3 class= "display-name"> ${food.name} </h3>
  <h4 class= "display-type"> ${food.type} </h4>
  <img class= "image" src= "${food.img}"/> 
  </div>`
    );
  });
}
card();

{
  /* <h3 class= "display-vegetarian"> Vegetarian: ${food.vegetarian} </h3>
  <h3 class= "display-price"> Price: ${food.price} $ </h3>
  <h3 class= "display-stock"> In Stock: ${food.instock} </h3> */
}

/* <h3 class="display-vegetarian"> Vegetarian: ${food.vegetarian} </h3>
    <h3 class="display-price"> Price: ${food.price} $ </h3>
    <h3 class="display-stock"> In Stock: ${food.instock} </h3>
    </div>` */

/* const product = {
.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name)
});
};
 */
