import { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.informations;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='pokemon'>
        <div>
          <p>{name}</p>
          <p>{`Type: ${type}`}</p>
          <p>{`Average weight: ${value}${measurementUnit}`}</p>
        </div>
        <div>
          <img src={image} alt={`Foto do ${name}`}></img>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  informations: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Pokemon;
