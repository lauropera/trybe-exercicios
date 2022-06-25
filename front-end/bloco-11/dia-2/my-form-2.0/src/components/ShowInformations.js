import React from 'react';

class ShowInformations extends React.Component {
  render() {
    const {
      info: {name, email, cpf, adress, city, state,
      livingPlace, curriculum, lastJob, jobDescription,}
    } = this.props;
    return (
      <div className='informations'>
        <h1>Dados</h1>
        <h3>{`Nome: ${name}`}</h3>
        <p>{`Email: ${email}`}</p>
        <p>{`CPF: ${cpf}`}</p>
        <p>{`Endereço: ${adress}`}</p>
        <p>{`Cidade: ${city}`}</p>
        <p>{`Estado: ${state}`}</p>
        <p>{`Tipo de Casa: ${livingPlace}`}</p>
        <p>{`Curriculo: ${curriculum}`}</p>
        <p>{`Último emprego: ${lastJob}`}</p>
        <p>{`Descriçao do trabalho: ${jobDescription}`}</p>
      </div>
    )
  }
}

export default ShowInformations;
