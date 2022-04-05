import React from "react";
import CreatePokemon from './CreatePokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokemon-container'>
        { pokemons.map( pokemon => <CreatePokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
  }
}

export default Pokedex;