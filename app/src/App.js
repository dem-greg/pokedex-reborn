import './App.css';
import PokemonListContainer from "./Components/PokemonList/PokemonListContainer";
import {useEffect} from "react";

function App() {
  useEffect(() => {
    document.title = "pokedex"
  }, []);
  return (
  <div>
    <PokemonListContainer />
  </div>
  )
}

export default App;
