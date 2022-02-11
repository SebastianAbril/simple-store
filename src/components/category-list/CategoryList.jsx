import React from "react";
import "./CategoryList.css";
import { Label } from "../label/Label";

export const CategoryList = ({ title, products }) => {
  console.log("products", products);

  return (
    <div className="CategoryList">
      <Label text={title} />
      <div className="CategoryList-products">
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              name={product.title}
              price={product.price}
              image={product.image}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
};

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="Product-Card">
      <img src={image}></img>
      <Label text={name} />
      <Label text={price} />
    </div>
  );
};
