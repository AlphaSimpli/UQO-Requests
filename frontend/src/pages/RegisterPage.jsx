import { useState } from "react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      setMessage("Tous les champs sont requis.");
      return;
    }
    setMessage("Inscription simulée réussie.");
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={submit}>
        <input placeholder="Nom"
          onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <button>S’inscrire</button>
      </form>
      <p>{message}</p>
    </div>
  );
}