/*
    props: {
        children:[
            HTML, HTML, HTML
        ]
    }
*/
export const Card = (props) => {
  const card = document.createElement("div");

  card.classList.add("fields");
  props.children.forEach((element) => card.append(element));

  return card;
};
