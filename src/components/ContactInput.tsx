import React, { useState } from "react";
import styles from "./ContactInput.module.css";

export default function ContactInput() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendNumberToZap = () => {
    if (number) {
      const url = `https://api.whatsapp.com/send?phone=55${number.replace(
        /\D/g,
        ""
      )}&text=${message}`;
      window.open(url, "_blank").focus();
    }
  };

  const formatPhoneNumber = (value) => {
    const cleaned = ("" + value).replace(/\D/g, "");

    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 6)
      return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(
      7,
      11
    )}`;
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setNumber(formatPhoneNumber(value));
  };

  return (
    <div>
      <h2>Inicie uma conversa no WhatsApp sem precisar adicionar um contato</h2>

      <input
        type="tel"
        placeholder="Numero do contato"
        value={number}
        onChange={handleChange}
        className={styles.numberInput}
      />

      <textarea
        placeholder="Sua mensagem (opicional)"
        onChange={(e) => setMessage(e.target.value)}
        className={styles.messageInput}
      />

      <p style={{ maxWidth: "300px", margin: "10px 0", color: "#075e54" }}>
        Ao clicar, uma conversa no WhatsApp será aberta com o contato
      </p>

      <button onClick={() => sendNumberToZap()} className={styles.button}>
        Conversar
      </button>
    </div>
  );
}
