import React from "react";
import AbilityList from "./AbilityList";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { useProfileContext } from "../../contexts/ProfileContext";

const PokemonDetail = () => {
  const { selectedPokemon: pokemon, handleSelectAbility } = usePokemonContext();
  const { addFavoritePokemon, isFavoritePokemon } = useProfileContext();
  if (!pokemon) return null;

  return (
    <>
      <div className="form-group">
        <label htmlFor="name">ID:</label>
        <div className="field">{pokemon.id}</div>
      </div>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <div className="field">{pokemon.name}</div>
      </div>

      <div className="form-group">
        <label htmlFor="name">Height:</label>
        <div className="field">{pokemon.height}</div>
      </div>

      <div className="form-group">
        <label htmlFor="name">weight:</label>
        <div className="field">{pokemon.weight}</div>
      </div>

      <div className="form-group">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <AbilityList abilities={pokemon.abilities} onAbilitySelected={handleSelectAbility}/>
      <div className="detail-button-container">
        <button className="detail-button" disabled={isFavoritePokemon(pokemon)} onClick={() => addFavoritePokemon(pokemon)}>Add to favorites</button>
        <button className="detail-button">Buy this pokemon</button>
      </div>
    </>
  );
}

export default PokemonDetail;