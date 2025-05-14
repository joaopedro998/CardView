import React from 'react';

const PokemonCard = ({ name, sprite }) => {
  return (
    <div className="pokemon-card">
      <img src={sprite} alt={name} />
      <h3>{name?.toUpperCase()}</h3>
    </div>
  );
};

export default PokemonCard;
