import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";
import "./ProductAll.scss";

const ProductAll = ({ auth }) => {
  let navigate = useNavigate();
  let query = useQuery();
  let [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let searchTerm = useDebounce(query.get("q"), 500);
  const url = "http://localhost:5000/products";

  const getAllProduct = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  const getSearchProduct = async () => {
    setIsLoading(true);
    const res = await fetch(url + `?q=${searchTerm}`);
    const data = await res.json();
    setProducts(data);
    setIsLoading(false);
  };

  const goDetail = (id) => {
    if (auth) navigate(`/product/${id}`);
    else {
      alert("로그인 해주세요");
      navigate("/login");
    }
  };

  useEffect(() => {
    if (searchTerm) getSearchProduct();
    else if (searchTerm === null || searchTerm === "") {
      getAllProduct();
    }
  }, [searchTerm]);

  return (
    <div className="container">
      <div className="product-wrapper">
        {isLoading ? (
          <div>Loading...</div>
        ) : products.length === 0 ? (
          <div>찾고자하는 검색어 "{searchTerm}"에 맞는 결과가 없습니다</div>
        ) : (
          products.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => goDetail(product.id)}
            >
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
          ))
        )}
      </div>
    </div>
  );
};

export default ProductAll;
