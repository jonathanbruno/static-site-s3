import React from "react";
import { useProfileContext } from "../../contexts/ProfileContext";

const ProfileSummary = () => {
  const { favoritePokemons, removeFavoritePokemon } = useProfileContext();

  return (
    <div>
      <h2>Favorites</h2>
      <ul>{
          favoritePokemons.map(pokemon => {
            return <li className="selectable" key={pokemon.id} onClick={()=> removeFavoritePokemon(pokemon)}>{pokemon.name}, </li>
          })
        }</ul>
    </div>
  );
}

export default ProfileSummary;