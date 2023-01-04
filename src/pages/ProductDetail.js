import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("사이즈 선택");
  const [isLoading, setIsLoading] = useState(true);
  const url = "http://localhost:5000/products";

  const handleSize = (size) => {
    setSize(size);
  };

  const getProductDetail = async () => {
    setIsLoading(true);
    const res = await fetch(url + `/${id}`);
    const data = await res.json();
    setProduct(data);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="product-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="temp left">
            <div className="image">
              <img src={product.img} alt={product.title} />
            </div>
          </div>
          <div className="temp right">
            <div className="infos">
              <div className="info title">{product.title}</div>
              <div className="info price">₩{product.price}</div>
              {product.choice ? (
                <div className="info choice">Conscious choice</div>
              ) : null}
              <div className="dropdown-wrapper">
                <button className="dropdown-toggle btn">{size}</button>
                <div className="dropdown">
                  {product.size.map((size, idx) => (
                    <div
                      className="size"
                      key={idx}
                      onClick={() => handleSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <button className="add btn">추가</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetail;
