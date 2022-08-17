import { func, string } from 'prop-types';
import React from 'react';

function FavoriteAnimal({ animal, onAnimalChange }) {
  return (
    <div>
      <label htmlFor="animal">
        Favorite Animal:
        <input
          id="animal"
          value={ animal }
          onChange={ (event) => onAnimalChange(event.target.value) }
        />
      </label>
    </div>
  );
}

FavoriteAnimal.propTypes = {
  animal: string.isRequired,
  onAnimalChange: func.isRequired,
};

export default FavoriteAnimal;
