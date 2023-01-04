import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Header = ({ auth, setAuth }) => {
  const navigate = useNavigate();

  const handleLogInOut = () => {
    if (auth) {
      if (window.confirm("정말로 로그아웃 하시겠습니까?")) {
        setAuth(false);
        localStorage.removeItem("login");
        navigate("/");
      }
    } else navigate("/login");
  };

  const goMainPage = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="login-wrapper">
        <div className="login-btn" onClick={handleLogInOut}>
          <FontAwesomeIcon icon={faUser} />
          <div>{auth ? "로그아웃" : "로그인"}</div>
        </div>
      </div>
      <div className="logo">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/HM-Logo-1999-present.jpg"
          alt="logo"
          onClick={goMainPage}
        />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
