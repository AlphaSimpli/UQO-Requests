import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@uqo.ca");
  const [password, setPassword] = useState("password");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // L1: Auth simulée
    if (!email.trim() || !password.trim()) {
      setMessage("Veuillez remplir tous les champs.");
      return;
    }

    setIsLoggedIn(true);
    setMessage("Connexion simulée réussie.");
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 16, maxWidth: 520 }}>
      <h2>Connexion (L1 - simulée)</h2>

      {isLoggedIn && (
        <div style={{ padding: 10, border: "1px solid #cfc", marginBottom: 10 }}>
          Vous êtes déjà connecté.
        </div>
      )}

      {message && (
        <div style={{ padding: 10, border: "1px solid #ddd", marginBottom: 10 }}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 10 }}>
        <label>
          Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%" }} />
        </label>

        <label>
          Mot de passe
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%" }}
          />
        </label>

        <button type="submit">Se connecter</button>
      </form>

      <p style={{ marginTop: 10, opacity: 0.75 }}>
        L1 : aucune authentification réelle/JWT, interface seulement.
      </p>
    </div>
  );
}