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
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`;
console.log(menu);

/* const product = {

.filter((food) => food.type.includes("Main course"))
.forEach((food) => {
  console.log(food.name);
});
}
 */
