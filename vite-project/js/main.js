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
  <div class="main">
  <button class="btn">Click me to change themes!</button>
</div>
`;
console.log(menu);

const DOMSelectors = {
  parent: documentquerySelector("app"),
  button: getelementbyclass("btn"),
};

function card {
  DOMSelectors.displaySection.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card">
  <h2>name</h2>
  <h3>type</h3>
  <h3>vegetarian</h3>
  <h3>rice</h3>
  <h4>img</h2>
  <h3>instock</h3>
  </div>`
  );
}
console.log(card)

const product = {

.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name);
});
}

