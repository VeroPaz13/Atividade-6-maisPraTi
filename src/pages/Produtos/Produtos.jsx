import React from "react";
import products from "../../data/products";
import styles from "./produtos.module.css";

import camisetaBasica from "../../assets/camisetaBasica.jpg";
import jeansMasculino from "../../assets/jeansMasculino.jpg";
import tenisHerois from "../../assets/tenisHerois.jpg";
import jaquetaJeans from "../../assets/jaquetaJeans.jpg";
import bolsaFeminina from "../../assets/bolsaFeminina.jpg";
import casioRelogio from "../../assets/casioRelogio.jpg";

const imagens = {
  "camisetaBasica.jpg": camisetaBasica,
  "jeansMasculino.jpg": jeansMasculino,
  "tenisHerois.jpg": tenisHerois,
  "jaquetaJeans.jpg": jaquetaJeans,
  "bolsaFeminina.jpg": bolsaFeminina,
  "casioRelogio.jpg": casioRelogio,
};

export default function Produtos() {
  const adicionarAoCarrinho = (produto) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem("carrinho")) || [];
    const existe = carrinhoAtual.find((item) => item.id === produto.id);

    if (existe) {
      const atualizado = carrinhoAtual.map((item) =>
        item.id === produto.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      localStorage.setItem("carrinho", JSON.stringify(atualizado));
      console.log("Carrinho atualizado:", atualizado);
    } else {
      const novoItem = {
        id: produto.id,
        title: produto.title,
        price: produto.price,
        image: produto.image,
        quantity: 1,
      };
      const novoCarrinho = [...carrinhoAtual, novoItem];
      localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
      console.log("Carrinho novo:", novoCarrinho);
    }

    alert(`🛒 ${produto.title} adicionado ao carrinho!`);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.tituloPrincipal}>
        🛍️ Veja nossos produtos e se apaixone
      </h2>

      <div className={styles.gridProdutos}>
        {products.map((produto) => (
          <div key={produto.id} className={styles.card}>
            <img
              src={imagens[produto.image]}
              alt={produto.title}
              className={styles.img}
            />
            <h2 className={styles.titulo}>{produto.title}</h2>
            <p className={styles.preco}>R$ {produto.price.toFixed(2)}</p>
            <span className={styles.tag}>{produto.tag}</span>
            <p className={styles.rating}>⭐ {produto.rating}</p>
            <button
              className={styles.btn}
              onClick={() => adicionarAoCarrinho(produto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
