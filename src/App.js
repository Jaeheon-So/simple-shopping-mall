import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Login from "./pages/Login";
import PrivateRoute from "./pages/PrivateRoute";
import ProductAll from "./pages/ProductAll";

// 상품 디테일 페이지 만들기

function App() {
  let [auth, setAuth] = useState(
    localStorage.getItem("login") === "true" ? true : false
  );
  return (
    <div className="App">
      <Header auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll auth={auth} />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/product/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
}

export default App;
