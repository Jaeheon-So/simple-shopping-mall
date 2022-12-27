import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
