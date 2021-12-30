import { Column } from "../components/Column";
import { Header } from "../components/Header";
import { ImageButtonCard } from "../components/ImageButtonCard";
import { Row } from "../components/Row";
import { ImageInfoCard } from "../components/ImageInfoCard";
import { Label } from "../components/Label";

export function HomeScreen() {
  const screen = Column({});

  Promise.all([
    fetch("https://fakestoreapi.com/products?limit=3").then((res) =>
      res.json()
    ),
    fetch("https://fakestoreapi.com/products/category/jewelery").then((res) =>
      res.json()
    ),
  ]).then((responses) => {
    const tmp = render(responses[0], responses[1]);
    screen.appendChild(tmp);

    console.log("responses", responses);
  });

  return screen;
}

const render = (products, productsInJewelery) => {
  return Column({
    children: [
      Header(),
      Row({
        style: {
          backgroundColor: "white",
          marginBottom: "60px",
        },
        children: [
          ImageButtonCard({
            style: {
              width: "100%",
              backgroundImage: `url(${products[0].image})`,
            },
            text: products[0].title,
            description: products[0].description,
          }),
        ],
      }),
      Row({
        style: {
          justifyContent: "space-between",
          backgroundColor: "white",
          marginBottom: "60px",
        },
        children: [
          ImageButtonCard({
            style: {
              width: "48%",
              backgroundImage: `url(${products[1].image})`,
            },
            text: products[1].title,
            description: products[1].description,
            buttonType: "link",
          }),
          ImageButtonCard({
            style: {
              width: "48%",
              backgroundImage: `url(${products[2].image})`,
            },
            buttonType: "link",
            text: products[2].title,
            description: products[2].description,
          }),
        ],
      }),
      Category({ title: "Jewelery", products: productsInJewelery }),
    ],
  });
};

const Category = ({ title = "Default Title", products = [] }) => {
  const cards = products.map((product) =>
    ImageInfoCard({ title: product.title })
  );

  return Column({
    style: {
      justifyContent: "space-between",
      backgroundColor: "white",
      marginBottom: "60px",
    },
    children: [
      Label({ text: title }),
      Row({
        children: cards,
      }),
    ],
  });
};
