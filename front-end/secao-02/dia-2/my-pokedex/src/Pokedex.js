import { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css'

class Pokedex extends Component {
  render() {
    return (
      <section className='pokemon-container'>
        {this.props.list.map((pkmn) => (
          <Pokemon informations={pkmn} key={pkmn.id} />
        ))}
      </section>
    );
  }
}

export default Pokedex;
