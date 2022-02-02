import "../css/styles.css";
//import { HomeScreen } from "./screens/HomeScreen.js";
import { ProductCardScreen } from "./screens/ProductCardScreen.js";

const app = document.getElementById("app");
//const screen = ComponentScreen();
//const screen = HomeScreen();
const screen = ProductCardScreen();
app.append(screen);
