import React from 'react';
import states from '../data/states';

class PersonInformations extends React.Component {
  render() {
    const { handleChange, onBlurHandler, value: { city } } = this.props;
    return (
      <fieldset className='inputs'>
        <legend>Dados</legend>
        <label htmlFor='name' className='label-input'>
          Nome
          <input
            type='name'
            name='name'
            id='name'
            maxLength='40'
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='email' className='label-input'>
          Email
          <input
            type='email'
            name='email'
            id='email'
            maxLength='50'
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='cpf' className='label-input'>
          CPF
          <input
            type='text'
            name='cpf'
            id='cpf'
            maxLength='11'
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='adress' className='label-input'>
          Endereço
          <input
            type='text'
            name='adress'
            id='adress'
            maxLength='200'
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor='city' className='label-input'>
          Cidade
          <input
            type='text'
            name='city'
            id='city'
            maxLength='28'
            onChange={handleChange}
            onBlur={onBlurHandler}
            value={city}
            required
          />
        </label>

        <label htmlFor='state'>
          Estado
          <select
            name='state'
            onChange={handleChange}
          >
            {states.map(({ uf, nome }) => (
              <option key={uf}>{nome}</option>
            ))}
          </select>
        </label>

        <label className='label-input'>
          Tipo de Moradia
          <label htmlFor='house'>
            <input
              type='radio'
              name='livingPlace'
              id='house'
              value='Casa'
              onChange={handleChange}
              required
            />
            Casa
          </label>
          <label htmlFor='apartment'>
            <input
              type='radio'
              name='livingPlace'
              id='apartment'
              value='Apartamento'
              onChange={handleChange}
              required
            />
            Apartamento
          </label>
        </label>
      </fieldset>
    );
  }
}

export default PersonInformations;
