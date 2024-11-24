import { createContext, useContext, useReducer } from "react";

const initialState = {
  favoritePokemons: [],
  cartItems: [],
  addFavoritePokemon: () => {},
  removeFavoritePokemon: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  isFavoritePokemon: () => {},
  isCartItem: () => {},
}
const profileReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE_POKEMON':
      return { ...state, favoritePokemons: [...state.favoritePokemons, action.payload] };
    case 'REMOVE_FAVORITE_POKEMON':
      return { ...state, favoritePokemons: state.favoritePokemons.filter(pokemon => pokemon !== action.payload) };
    case 'ADD_CART_ITEM':
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case 'REMOVE_CART_ITEM':
      return { ...state, cartItems: state.cartItems.filter(item => item !== action.payload) };
    default:
      return state;
  }
}

const Context = createContext(initialState);
const useProfileContext = () => useContext(Context);

const ProfileContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);
  const { favoritePokemons, cartItems } = state;

  const addFavoritePokemon = (pokemon) => {
    dispatch({ type: 'ADD_FAVORITE_POKEMON', payload: pokemon });
  }
  const removeFavoritePokemon = (pokemon) => {
    dispatch({ type: 'REMOVE_FAVORITE_POKEMON', payload: pokemon });
  }
  const addCartItem = (item) => {
    dispatch({ type: 'ADD_CART_ITEM', payload: item });
  }
  const removeCartItem = (item) => {
    dispatch({ type: 'REMOVE_CART_ITEM', payload: item });
  }
  const isFavoritePokemon = (pokemon) => {
    console.log(favoritePokemons)
    console.log(pokemon)
    return favoritePokemons.find(favorite => favorite.name === pokemon.name);
  }
  const isCartItem = (item) => {
    return cartItems.includes(item);
  }

  const value = {
    ...state,
    addFavoritePokemon,
    removeFavoritePokemon,
    addCartItem,
    removeCartItem,
    isFavoritePokemon,
    isCartItem,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export { useProfileContext, ProfileContextProvider };