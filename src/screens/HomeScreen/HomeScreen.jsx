import React, { useState, useEffect } from "react";
import { Header } from "../../components/header/Header";
import { CardButton } from "../../components/card-button/CardButton";
import { CategoryList } from "../../components/category-list/CategoryList";
import "./HomeScreen.css";

export function HomeScreen() {
  const [mainProducts, setMainProducts] = useState([]);
  const [jeweleryProducts, setJeweleryProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setMainProducts(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        setJeweleryProducts(data);
      });
  }, []);

  return (
    <div className="HomeScreen-container">
      <Header />
      <div className="HomeScreen-main-products">
        {mainProducts.map((product, index) => {
          const className = index === 0 ? "main-product" : "secondary-product";

          return (
            <CardButton
              key={product.id}
              title={product.title}
              description={product.description}
              text={product.price}
              backgroundImage={product.image}
              className={className}
            />
          );
        })}
      </div>
      <CategoryList title="Jewelery" products={jeweleryProducts} />
    </div>
  );
}
