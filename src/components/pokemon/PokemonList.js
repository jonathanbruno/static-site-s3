import React from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { useProfileContext } from "../../contexts/ProfileContext";

const PokemonList = () => {
  const { pokemonList, isPokemonSelected, handleSelectPokemon } = usePokemonContext();
  const { isFavoritePokemon } = useProfileContext();

  console.log('test')

  const getClassNameFor = pokemon => {
    if (isFavoritePokemon(pokemon)) return 'selectable-favorite';
    if (isPokemonSelected(pokemon)) return 'selectable-selected';

    return 'selectable';
  }
  return (
    <>
      <h1>Pokemon List</h1>
      <ul>
        {
          pokemonList.map(pokemon => {
            return (
              <li
                key={pokemon.name}
                className={getClassNameFor(pokemon)}
                onClick={() => handleSelectPokemon(pokemon)}>
                  {pokemon.name}
              </li>
            )
          })
        }
      </ul>
    </>
  );
}

export default PokemonList;