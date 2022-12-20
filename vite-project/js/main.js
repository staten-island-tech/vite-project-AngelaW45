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

/* 
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1> 
      <p>Architect & Engineer</p> 
      <p>We love that guy</p>
    </div>
  </div>
</div>
 */

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
        <h3 class="display-vegetarian"> Vegetarian: ${food.vegetarian} </h3>
        <h3 class="display-price"> Price: ${food.price} $ </h3>
        <h3 class="display-stock"> In Stock: ${food.instock} </h3>
        </div>

        
      </div>
    </div>`
    );
  });
}
card();

{
  /* <h3 class="display-name"> ${food.name} </h3>
              <h4 class="display-type"> ${food.type} </h4>
              <img class="image" src="${food.img}" />*/
}

/* <h3 class="display-vegetarian"> Vegetarian: ${food.vegetarian} </h3>
    <h3 class="display-price"> Price: ${food.price} $ </h3>
    <h3 class="display-stock"> In Stock: ${food.instock} </h3>
    */

/* const product = {
.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name)
});
};
 */
