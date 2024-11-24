import React from "react";

import PokemonList from "../components/pokemon/PokemonList";
import PokemonDetail from "../components/pokemon/PokemonDetail";
import AbilityDetail from "../components/pokemon/AbilityDetail";
import { PokemonContextProvider } from "../contexts/PokemonContext";
import { ProfileContextProvider } from "../contexts/ProfileContext";
import ProfileSummary from "../components/profile/ProfileSummary";

const PokemonListPage = () => {

  return (
    <PokemonContextProvider>
      <ProfileContextProvider>
      <div className="grid-container">
          <div className="grid-item-favorite">
            <ProfileSummary />
          </div>
          <div className="grid-item-menu">
            <PokemonList/>
          </div>
          <div className="grid-item-main">
            <PokemonDetail/>
          </div>
          <div className="grid-item-right">
            <AbilityDetail/>
          </div>
      </div>
      </ProfileContextProvider>
    </PokemonContextProvider>
  );
}

export default PokemonListPage;