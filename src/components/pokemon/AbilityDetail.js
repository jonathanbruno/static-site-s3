import React from 'react';
import { usePokemonContext } from '../../contexts/PokemonContext';

const AbilityNames = () => {
  const { abilityNames } = usePokemonContext();
  if (!abilityNames) return null;

  return (
    <>
      <h1>Ability names</h1>
      <ul>
        {
          abilityNames.map(({language, name }) => {
            return <li key={language.name}>{language.name} - {name}</li>
          })
        }
      </ul>
    </>
  );
}

export default AbilityNames;