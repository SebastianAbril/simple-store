import { Column } from "../components/Column";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function ProductCardScreen() {
  const screen = document.createElement("div");
  screen.classList.add("container");

  const header = Header();
  const footer = Footer();

  screen.append(header);
  screen.append(footer);

  return screen;
}
