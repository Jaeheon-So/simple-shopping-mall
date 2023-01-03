import React, { useEffect, useState } from "react";
import "./ProductAll.scss";

const ProductAll = () => {
  let [products, setProducts] = useState([]);

  const getAllProduct = async () => {
    const url = "http://localhost:5000/products";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <div className="container">
      <div className="product-wrapper">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img
              src={product.img}
              alt={product.title}
              className="product__img"
            />
            <div className="product__choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <div className="product__title">{product.title}</div>
            <div className="product__price">₩{product.price}</div>
            <div className="product__new">{product.new ? "신제품" : ""}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductAll;
