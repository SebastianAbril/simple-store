/*props = {
    type: fill, outline, link
    size: large,normal,small
    icon: arrow-right, arrow-left, cart.
    shape: rectangular or circular
    text: ....
}
*/
import "./Button.css";
import { Icon } from "../Icon";

export const Button = (props) => {
  const button = document.createElement("button");
  button.textContent = props.text;
  button.classList.add("button");

  if (props.type === "fill") {
    button.classList.add("button-fill");
  } else if (props.type === "outline") {
    button.classList.add("button-outline");
  } else if (props.type === "link") {
    button.classList.add("button-link");
  }

  if (props.size === "large") {
    button.classList.add("button-large");
  } else if (props.size === "normal") {
    button.classList.add("button-normal");
  } else if (props.size === "small") {
    button.classList.add("button-small");
  }

  if (props.icon === "arrow-right") {
    button.classList.add("button-arrow-right");
    const icon = Icon({ name: "fa-long-arrow-right" });
    button.append(icon);
  } else if (props.icon === "arrow-left") {
    button.classList.add("button-arrow-left");
    const icon = Icon({ name: "fa-long-arrow-left" });
    button.append(icon);
  } else if (props.icon === "cart") {
    button.classList.add("button-cart");
    const icon = Icon({ name: "fa-cart-plus" });
    button.append(icon);
  }

  if (props.shape === "circular") {
    button.classList.add("button-circular");
  }

  if (props.shape === "circular" && props.size === "small") {
    button.classList.add("button-circular-small");
    console.log("Circular y pequeño");
  }

  return button;
};
