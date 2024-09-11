import React, { useState } from "react";

export default function ContactInput() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendNumberToZap = () => {
    if (number) {
      const url = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`;
      window.open(url, "_blank").focus();
    }
  };

  return (
    <div>
      <h2>Inicie uma conversa no WhatsApp sem precisar adicionar um contato</h2>
      <p>Ex: 21991910000</p>

      <input
        type="tel"
        placeholder="Numero do contato"
        onChange={(e) => setNumber(e.target.value)}
        style={{ display: "block", padding: "8px", margin: "10px 0" }}
      />

      <textarea
        placeholder="Sua mensagem (opicional)"
        onChange={(e) => setMessage(e.target.value)}
        style={{
          display: "block",
          padding: "12px",
          width: "300px",
          height: "100px",
        }}
      />

      <p style={{ maxWidth: "300px", margin: "10px 0" }}>
        Ao clicar, uma conversa no WhatsApp será aberta com o contato
      </p>

      <button
        onClick={() => sendNumberToZap()}
        style={{
          display: "block",
          padding: "12px 25px",
          cursor: "pointer",
          margin: "10px 0",
        }}
      >
        Conversar
      </button>
    </div>
  );
}
