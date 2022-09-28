import React from 'react';
import ProfessionalInformations from './ProfessionalInformations';
import PersonInformations from './PersonInformations';
import ShowInformations from './ShowInformations';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
  livingPlace: '',
  curriculum: '',
  lastJob: '',
  jobDescription: '',
  submitted: false,
};

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.onBlurHandler = this.onBlurHandler.bind(this)
    this.resetForm = this.resetForm.bind(this);
    this.state = INITIAL_STATE;
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    this.setState({ [name]: value });
  }

  submitForm(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  resetForm() {
    this.setState(INITIAL_STATE);
  }

  onBlurHandler({ target }) {
    let { name, value } = target;
    if (value[0].match(/\d+/g)) this.setState({ [name]: '' });
  }

  onClickHandler() {
    global.alert('Preencha com cuidado esta informação');
  }

  render() {
    const { submitted } = this.state;
    return (
      <>
        <form className='main-form' onSubmit={this.submitForm}>
          <PersonInformations
            value={this.state}
            handleChange={this.handleChange}
            onBlurHandler={this.onBlurHandler}
          />
          <ProfessionalInformations
            value={this.state}
            handleChange={this.handleChange}
            onClickHandler={this.onClickHandler}
          />
          <input type='submit' value='Enviar' />
          <input type='reset' value='Limpar' onClick={this.resetForm} />
        </form>
        {submitted && <ShowInformations info={this.state} />}
      </>
    );
  }
}

export default Form;
