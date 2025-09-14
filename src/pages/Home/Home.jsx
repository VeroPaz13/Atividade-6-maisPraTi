import React from "react";
import "../../styles/global.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-container">
      <h1 className="titulo-home">Bem-vinda à nossa loja! 💖</h1>
      <p className="descricao-home">
        Aqui você encontra estilo, conforto e ofertas incríveis. Navegue pelos
        nossos produtos e descubra peças que combinam com você.
      </p>
      <Link to="/produtos" className="btn-home">
        Ver produtos
      </Link>
    </section>
  );
}
