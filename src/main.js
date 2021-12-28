import "../css/styles.css";
import { HomeScreen } from "./screens/HomeScreen.js";

const app = document.getElementById("app");
//const screen = ComponentScreen();
const screen = HomeScreen();
app.append(screen);
