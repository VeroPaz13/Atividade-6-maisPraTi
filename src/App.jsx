import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Produtos from "./pages/Produtos/Produtos";
import Carrinho from "./pages/Carrinho/Carrinho";
import "./styles/global.css";
import "./styles/tailwind.css";

export default function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="navbar-logo">Aura Urbana</div>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/cadastro">Cadastro</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/carrinho">Carrinho</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
}
