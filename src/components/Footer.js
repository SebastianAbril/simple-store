import { Row } from "../components/Row.js";
import { Div } from "../components/Div.js";
import { Column } from "../components/Column.js";
import { Label } from "../components/Label.js";
import { Icon } from "../components/Icon.js";

export const Footer = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  const footerRow = Row({
    className: "footerRow",
    children: [
      Column({
        className: "footerColumn",
        children: [
          Label({ text: "Title" }),
          Label({ text: "nn-nn-nn" }),
          Row({
            className: "footerIconRow",
            children: [
              Div({ children: [Icon({ name: "fa-instagram" })] }),
              Div({ children: [Icon({ name: "fa-whatsapp" })] }),
              Div({ children: [Icon({ name: "fa-facebook" })] }),
            ],
          }),
        ],
      }),
      Column({
        className: "footerColumn",
        children: [
          Label({ text: "Title" }),
          Label({ text: "Item1" }),
          Label({ text: "Item2" }),
          Label({ text: "Item3" }),
          Label({ text: "Item4" }),
          Label({ text: "Item5" }),
        ],
      }),
      Column({
        className: "footerColumn",
        children: [
          Label({ text: "Title" }),
          Label({ text: "Item1" }),
          Label({ text: "Item2" }),
          Label({ text: "Item3" }),
          Label({ text: "Item4" }),
          Label({ text: "Item5" }),
        ],
      }),
      Column({
        className: "footerColumn",
        children: [
          Label({ text: "Title" }),
          Label({ text: "Item1" }),
          Label({ text: "Item2" }),
          Label({ text: "Item3" }),
          Label({ text: "Item4" }),
          Label({ text: "Item5" }),
        ],
      }),
    ],
    style: {
      justifyContent: "space-between",
      backgroundColor: "white",
      alignItems: "flex-start",
    },
  });

  footer.append(footerRow);

  return footer;
};
