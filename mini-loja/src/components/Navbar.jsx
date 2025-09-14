import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeProvider";

export default function Navbar({ cartCount }) {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <header className="navbar" role="navigation" aria-label="Main">
      <div className="brand">MiniLoja</div>
      <nav className="nav-actions">
        <button
          className="btn ghost"
          aria-pressed={theme === "dark"}
          onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
          aria-label="Alternar tema"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        <a
          href="/carrinho"
          className="btn outline"
          aria-label={`Carrinho: ${cartCount} itens`}
        >
          🛒 <span aria-hidden>{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}
