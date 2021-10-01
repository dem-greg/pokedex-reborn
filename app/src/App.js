import './App.css';
import PokemonListContainer from "./Components/PokemonList/PokemonListContainer";
import React, {useEffect} from "react";
import PokemonSearchFormContainer from "./Components/PokemonSearchForm/PokemonSearchFormContainer";
import FilterContainer from "./Components/Filter/FilterContainer";

function App() {
  useEffect(() => {
    document.title = "pokedex"
  }, []);
  return (
  <div>
    <PokemonSearchFormContainer />
    <FilterContainer />
    <PokemonListContainer />
  </div>
  )
}

export default App;
