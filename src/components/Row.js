/*
Props ={
    children: [child1, child2, .... childn]
    style: {
        justifyContent: space-between
        backgroundColor: white
        alignItems
        ...
    }
}
*/
export const Row = ({ className, children = [], style = {} }) => {
  const row = document.createElement("div"); // creo un div y lo guardo en row.
  row.classList.add("row"); // agrego clase 'row

  if (className) {
    row.classList.add(className);
  }

  Object.keys(style).forEach((AttributeName) => {
    row.style[AttributeName] = style[AttributeName];
  });

  children.forEach((element) => row.append(element));

  return row;
};
