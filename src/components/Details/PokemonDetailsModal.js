import React, { useEffect, useState } from 'react';
import './PokemonDetailsModal.css';

const typeColors = {
  fire: '#FD7D24',
  water: '#4592C4',
  grass: '#9BCC50',
  electric: '#EED535',
  bug: '#729F3F',
  normal: '#A4ACAF',
  poison: '#B97FC9',
  ground: '#E0C068',
  fairy: '#FDB9E9',
  psychic: '#F366B9',
  rock: '#A38C21',
  fighting: '#D56723',
  ghost: '#7B62A3',
  ice: '#51C4E7',
  dragon: '#53A4CF',
  dark: '#707070',
  steel: '#9EB7B8',
  flying: '#3DC7EF',
};

const PokemonDetailsModal = ({ card, onClose }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${card.pokemonId}`);
      const data = await res.json();
      setDetails(data);
    };
    fetchDetails();
  }, [card]);

  if (!details) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={details.sprites.front_default} alt={details.name} className="pokemon-image" />
        <h2>{details.name.toUpperCase()} #{details.id}</h2>

        <div className="types">
          {details.types.map(({ type }) => (
            <span
              key={type.name}
              className="type-badge"
              style={{ backgroundColor: typeColors[type.name] || '#777' }}
            >
              {type.name.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="stats">
          {details.stats.map(stat => (
            <div key={stat.stat.name} className="stat">
              <strong>{stat.stat.name.toUpperCase()}</strong>: {stat.base_stat}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsModal;
