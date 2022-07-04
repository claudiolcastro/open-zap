import React, { useState } from 'react'

export default function ContactInput() {
  const [number, setNumber] = useState('')
  const [message, setMessage] = useState('')

  const sendNumberToZap = () => {
    if (number) {
      const url = `https://api.whatsapp.com/send?phone=55${number}&text=${message}`
      window.open(url, '_blank').focus()
    }
  }

  return (
    <div>
      <h2>Bota aí um contato (BR) com DDD</h2>
      <p>Ex: 21991910000</p>

      <input
        type="tel"
        placeholder="contatinho"
        onChange={(e) => setNumber(e.target.value)}
        style={{ display: 'block', padding: '8px', margin: '10px 0' }}
      />

      <textarea
        type="text"
        placeholder="meteu essa?"
        onChange={(e) => setMessage(e.target.value)}
        style={{ display: 'block', padding: '12px', width: '300px', height: '100px' }}
      />

      <p style={{ maxWidth: '300px', margin: '10px 0' }}>
        Seguinte, tu vai mandar mensagem no <b>ZAP</b> sem precisar add o contato, sacou?
      </p>

      <button
        onClick={() => sendNumberToZap()}
        style={{ display: 'block', padding: '12px 25px', cursor: 'pointer', margin: '10px 0' }}
      >
        VAI!
      </button>
    </div>
  )
}
