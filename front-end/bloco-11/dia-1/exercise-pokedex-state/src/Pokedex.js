import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.nextPkmn = this.nextPkmn.bind(this);
    this.saveType = this.saveType.bind(this);
    this.state = {
      pkmnPosition: 0,
      pkmnType: '',
    };
  }

  nextPkmn(pkmnQuantity) {
    this.setState((prevState) => ({
      pkmnPosition: (prevState.pkmnPosition + 1) % pkmnQuantity,
    }));
  }

  saveType(type) {
    this.setState({ pkmnType: type });
  }

  filteredPokemons() {
    const { pokemons } = this.props;
    const { pkmnType } = this.state;
    return pokemons.filter((pkmn) => {
      if (pkmnType === '') return true;
      return pkmn.type === pkmnType;
    });
  }

  render() {
    const { pkmnPosition } = this.state;
    return (
      <>
        <div className="pokedex">
          <Pokemon
            key={ this.filteredPokemons()[pkmnPosition].id }
            pokemon={ this.filteredPokemons()[pkmnPosition] }
          />
        </div>
        <button
          type="button"
          onClick={ () => this.nextPkmn(this.filteredPokemons().length) }
        >
          Next Pokémon
        </button>
        <button type="button" onClick={ () => this.saveType('Fire') }>
          Fire
        </button>
        <button type="button" onClick={ () => this.saveType('Psychic') }>
          Psychic
        </button>
      </>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
