import { ComponentScreen } from "./screens/ComponentScreen.js";
import { HomeScreen } from "./screens/HomeScreen.js";

const app = document.getElementById('app');
//const screen = ComponentScreen();
const screen = HomeScreen();
app.append(screen);