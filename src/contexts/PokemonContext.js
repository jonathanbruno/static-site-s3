import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';

const initialState = {
  pokemonList: [],
  selectedPokemon: null,
  selectedAbility: null,
  abilityNames: [],
  handleSelectPokemon: () => {},
  setSelectedAbility: () => {},
  isPokemonSelected: () => {},
  isAbilitySelected: () => {},
}

const pokemonReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POKEMON_LIST':
      return { ...state, pokemonList: action.payload };
    case 'SET_SELECTED_POKEMON':
      return { ...state, selectedPokemon: action.payload };
    case 'SET_SELECTED_ABILITY':
      return { ...state, selectedAbility: action.payload };
    case 'SET_ABILITY_NAMES':
      return { ...state, abilityNames: action.payload };
    default:
      return state;
  }
}

const Context = createContext(initialState);
const usePokemonContext = () => useContext(Context);

const PokemonContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  const { pokemonList, selectedPokemon, selectedAbility, abilityNames } = state;

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
      .then(response => {
        dispatch({type: 'SET_POKEMON_LIST', payload: response.data.results});
      })
  }, [])

  useEffect(() => {
    if (selectedPokemon){
      setSelectedAbility(selectedPokemon.abilities[0].ability);
    }
  }, [selectedPokemon])

  useEffect(() => {
    if (selectedAbility){
      axios
        .get(selectedAbility.url)
        .then(response =>  {
          dispatch({type: 'SET_ABILITY_NAMES', payload: response.data.names});
        })
    }
  }, [selectedAbility])

  const setSelectedAbility = (ability) => {
    dispatch({type: 'SET_SELECTED_ABILITY', payload: ability});
  }

  const handleSelectPokemon = (pokemon) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => dispatch({type: 'SET_SELECTED_POKEMON', payload: response.data}))
  }
  const isPokemonSelected = (pokemon) => {
    if (!selectedPokemon) return false;

    return selectedPokemon.name === pokemon.name;
  }
  const isAbilitySelected = (ability) => {
    if (!selectedAbility) return false;

    return selectedAbility.name === ability.name;
  }


  const value = {
    pokemonList,
    selectedPokemon,
    selectedAbility,
    abilityNames,
    setSelectedAbility,
    handleSelectPokemon,
    isPokemonSelected,
    isAbilitySelected,
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export { usePokemonContext, PokemonContextProvider };


