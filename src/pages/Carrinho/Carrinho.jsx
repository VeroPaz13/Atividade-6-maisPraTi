import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const Btn = styled.button`
  padding: 8px 12px;
  border-radius: 6px;
  transition: transform 0.3s, opacity 0.3s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.25);
    outline-offset: 2px;
  }

  &:hover {
    animation: ${pulse} 0.3s ease-in-out;
  }

  ${(p) =>
    p.variant === "solid" &&
    `
    background: #2563eb;
    color: white;
    border: none;
  `}
  ${(p) =>
    p.variant === "outline" &&
    `
    background: transparent;
    border: 1px solid #2563eb;
    color: #2563eb;
  `}
`;

const Container = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const Image = styled.img`
  width: 80px;
  height: auto;
  border-radius: 6px;
`;

const Info = styled.div`
  flex: 1;
`;

const Quantity = styled.input`
  width: 60px;
  padding: 4px;
  margin-left: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoCarregado, setCarrinhoCarregado] = useState(false);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("carrinho");
    if (dadosSalvos) {
      try {
        const parsed = JSON.parse(dadosSalvos);
        console.log("Carrinho carregado:", parsed);
        if (Array.isArray(parsed)) {
          setCarrinho(parsed);
        }
      } catch (error) {
        console.error("Erro ao ler carrinho:", error);
      }
    }
    setCarrinhoCarregado(true);
  }, []);

  // Atualiza localStorage somente após carregamento inicial
  useEffect(() => {
    if (carrinhoCarregado) {
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }
  }, [carrinho, carrinhoCarregado]);

  const atualizarQuantidade = (id, novaQtd) => {
    if (novaQtd < 1) return;
    setCarrinho((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: novaQtd } : item
      )
    );
  };

  const removerItem = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  const limparCarrinho = () => {
    setCarrinho([]);
    localStorage.removeItem("carrinho");
  };

  const total = carrinho.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Title>🛒 Seu Carrinho</Title>

      {carrinho.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          {carrinho.map((item) => (
            <Item key={item.id}>
              <Image src={imagens[item.image]} alt={item.title} />
              <Info>
                <strong>{item.title}</strong>
                <p>R$ {item.price.toFixed(2)}</p>
              </Info>
              <div>
                <label>
                  Qtd:
                  <Quantity
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      atualizarQuantidade(item.id, Number(e.target.value))
                    }
                  />
                </label>
                <Btn
                  variant="outline"
                  onClick={() => removerItem(item.id)}
                  style={{ marginLeft: "1rem" }}
                >
                  Remover
                </Btn>
              </div>
            </Item>
          ))}

          <p
            style={{
              textAlign: "right",
              fontWeight: "bold",
              fontSize: "1.2rem",
              marginTop: "1rem",
            }}
          >
            Total: R$ {total.toFixed(2)}
          </p>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Btn variant="solid" onClick={limparCarrinho}>
              Limpar Carrinho
            </Btn>
          </div>
        </>
      )}
    </Container>
  );
}
