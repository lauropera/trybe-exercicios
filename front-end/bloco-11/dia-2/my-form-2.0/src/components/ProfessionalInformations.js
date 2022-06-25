import React from 'react';

class ProfessionalInformations extends React.Component {
  render() {
    const { handleChange, onClickHandler } = this.props;
    return (
      <fieldset className='inputs'>
        <legend>Sobre seu último emprego</legend>
        <label htmlFor='last-job' className='label-input'>
          Resumo do currículo
          <textarea
            name='last-job'
            id='last-job'
            maxLength='1000'
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor='job' className='label-input'>
          Cargo
          <input
            name='job'
            id='job'
            maxLength='40'
            onChange={handleChange}
            onClick={onClickHandler}
            required
          />
        </label>
        <label htmlFor='jobDescription' className='label-input'>
          Descrição do cargo
          <textarea
            name='jobDescription'
            id='jobDescription'
            maxLength='500'
            onChange={handleChange}
            required
          />
        </label>
      </fieldset>
    );
  }
}

export default ProfessionalInformations;
