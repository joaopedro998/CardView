// src/components/TradeModal/index.js
import React, { useState } from 'react';
import { proposeTrade } from '../../api/trades';
import './styles.css';

const TradeModal = ({ card, onClose }) => {
  const [receiverId, setReceiverId] = useState('');
  const [requestedCardId, setRequestedCardId] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await proposeTrade(
        card.ownerId, // ID do jogador atual (deve vir do AuthContext)
        receiverId,
        card.id,
        requestedCardId
      );
      setMessage('Troca proposta com sucesso!');
    } catch (error) {
      setMessage('Erro ao propor troca');
    }
  };

  return (
    <div className="trade-modal-overlay">
      <div className="trade-modal">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Propor Troca</h2>
        <form onSubmit={handleSubmit}>
          <label>
            ID do Jogador:
            <input
              type="text"
              value={receiverId}
              onChange={(e) => setReceiverId(e.target.value)}
              required
            />
          </label>
          <label>
            ID da Carta Desejada:
            <input
              type="text"
              value={requestedCardId}
              onChange={(e) => setRequestedCardId(e.target.value)}
              required
            />
          </label>
          <button type="submit">Enviar Proposta</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default TradeModal;