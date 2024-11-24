import React from 'react';
import { usePokemonContext } from '../../contexts/PokemonContext';

const AbilityList = () => {
  const { selectedPokemon, setSelectedAbility, isAbilitySelected } = usePokemonContext();
  if (!selectedPokemon?.abilities) return null;

  return (
    <>
      <h1>Abilities</h1>
      <ul>
        {
          selectedPokemon.abilities.map(({ ability })=> {
            const className = isAbilitySelected(ability) ? 'selectable-selected' : 'selectable';
            return <li className={className} onClick={() => setSelectedAbility(ability)} key={ability.name}> {ability.name} </li>
          })
        }
      </ul>
    </>
  )
}

export default AbilityList;