import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";

const Navbar = () => {
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
      <form className="search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" placeholder="제품 검색" />
      </form>
    </div>
  );
};

export default Navbar;
