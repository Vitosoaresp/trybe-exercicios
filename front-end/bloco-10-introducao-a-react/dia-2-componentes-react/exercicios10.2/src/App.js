import './App.css';
import Pokedex from './pokedex';
import Pokemons from './data';

function App() {
  return (
    <div className='app'>
      <h1>Pokedex</h1>
      <Pokedex pokemons={Pokemons} />
    </div>
  );
}

export default App;
