import React, { useState, useEffect } from 'react';
import { useAuth } from '../../auth/AuthContext';
import PokemonCard from '../../components/PokemonCard';
import TradeModal from '../../components/TradeModal';
import NotificationBell from '../../components/NotificationBell';
import PokemonDetailsModal from '../../components/Details/PokemonDetailsModal';
import './styles.css';

const Collection = () => {
  const { user } = useAuth();
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showTradeModal, setShowTradeModal] = useState(false);
  const [battleOpponent, setBattleOpponent] = useState('');
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  // Função para gerar número aleatório entre 1 e 151
  const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

  // Função para simular troca (substitui 1 dos 5 por outro aleatório)
  const simulateTrade = async () => {
    try {
      const newPokemonId = getRandomPokemonId();
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${newPokemonId}`);
      const data = await res.json();

      const newCard = {
        id: Date.now(), // ID único
        pokemonId: newPokemonId,
        ownerId: user?.id || 'mock-user-id',
        name: data.name,
        sprite: data.sprites.front_default || 'https://via.placeholder.com/96'
      };

      // Substitui uma carta aleatória entre as 5
      const indexToReplace = Math.floor(Math.random() * 5);
      const updatedCards = [...cards];
      updatedCards[indexToReplace] = newCard;

      setCards(updatedCards);
    } catch (error) {
      console.error('Erro ao simular troca:', error);
      alert('Erro ao simular troca');
    }
  };

  useEffect(() => {
    document.title = "Coleção";

    const fetchCards = async () => {
      try {
        // Gera 5 cartas com Pokémon aleatórios
        const mockCards = Array.from({ length: 5 }, (_, index) => ({
          id: index + 1,
          pokemonId: getRandomPokemonId(),
          ownerId: user?.id || 'mock-user-id'
        }));

        const detailedCards = await Promise.all(
          mockCards.map(async (card) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.pokemonId}`);
            const data = await res.json();

            return {
              ...card,
              name: data.name,
              sprite: data.sprites.front_default || 'https://via.placeholder.com/96'
            };
          })
        );

        setCards(detailedCards);
      } catch (error) {
        console.error('Erro ao buscar cartas:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchCards();
    }
  }, [user]);

  const handleBattle = async () => {
    try {
      alert(`Desafio enviado para o jogador ${battleOpponent}! (Simulação)`);
    } catch (error) {
      alert('Erro ao enviar desafio');
    }
  };

  if (loading) return <div className="loading">Carregando sua coleção...</div>;

  return (
    <div className="collection-container">
      <div className="header">
        <h1>Minha Coleção Pokémon</h1>
        <NotificationBell />
      </div>

      <div className="battle-section">
        <input
          type="text"
          placeholder="ID do oponente"
          value={battleOpponent}
          onChange={(e) => setBattleOpponent(e.target.value)}
        />
        <button onClick={handleBattle}>Desafiar para Batalha</button>

        {/* Botão Simular Troca */}
        <button onClick={simulateTrade} className="simulate-button">Simular Troca</button>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div key={card.id} className="card-wrapper">
            <div onClick={() => setSelectedCardDetails(card)}>
              <PokemonCard
                pokemonId={card.pokemonId}
                name={card.name}
                sprite={card.sprite}
                cardData={card}
              />
            </div>
            <button
              className="trade-button"
              onClick={() => {
                setSelectedCard(card);
                setShowTradeModal(true);
              }}
            >
              Oferecer para Troca
            </button>
          </div>
        ))}
      </div>

      {showTradeModal && selectedCard && (
        <TradeModal
          card={selectedCard}
          onClose={() => setShowTradeModal(false)}
        />
      )}

      {selectedCardDetails && (
        <PokemonDetailsModal
          card={selectedCardDetails}
          onClose={() => setSelectedCardDetails(null)}
        />
      )}
    </div>
  );
};

export default Collection;
