import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../hooks/useQuery";

const Navbar = () => {
  let navigate = useNavigate();
  let query = useQuery();
  let searchTerm = query.get("q");
  let [inputValue, setInputValue] = useState(searchTerm || "");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
    navigate(`/?q=${e.target.value}`);
  };

  useEffect(() => {
    if (!searchTerm) setInputValue("");
    else setInputValue(searchTerm);
  }, [searchTerm]);

  return (
    <div className="nav-wrapper">
      <ul className="nav">
        <li>여성</li>
        <li>Divided</li>
        <li>남성</li>
        <li>신생아/유아</li>
        <li>아동</li>
        <li>H&M Home</li>
        <li>Sale</li>
        <li>지속가능성</li>
      </ul>
      <div className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="제품 검색"
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
        />
      </div>
    </div>
  );
};

export default Navbar;
