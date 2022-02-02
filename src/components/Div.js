export const Div = ({ className, children = [] }) => {
  const div = document.createElement("div");

  if (className) {
    div.classList.add(className);
  }

  children.forEach((element) => div.append(element));
  return div;
};
