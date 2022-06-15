import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

function App() {
  return (<Pokedex list={pokemons}/>);
}

export default App;
