import React, { useState } from "react";
import "../../styles/tailwind.css";

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    endereco: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.senha !== form.confirmarSenha) {
      alert("As senhas não conferem!");
      return;
    }

    console.log("Dados enviados:", form);
    alert("Cadastro realizado com sucesso!");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="mb-8 text-center text-[100px] font-bold text-gray-800">
        Cadastro
      </h1>

      <form
        className="flex w-full max-w-md flex-col gap-5 rounded-lg bg-white px-8 py-6 shadow-lg"
        onSubmit={handleSubmit}
      >
        {[
          { label: "Nome", name: "nome", type: "text" },
          { label: "E-mail", name: "email", type: "email" },
          { label: "Senha", name: "senha", type: "password" },
          {
            label: "Confirmar Senha",
            name: "confirmarSenha",
            type: "password",
          },
          { label: "Telefone", name: "telefone", type: "tel" },
          { label: "Endereço", name: "endereco", type: "text" },
        ].map((field) => (
          <label key={field.name} className="block">
            <span className="text-sm text-gray-700">{field.label}</span>
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              required={field.name !== "telefone" && field.name !== "endereco"}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </label>
        ))}

        <div className="mt-6">
          <button type="submit" className="btn w-full">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
