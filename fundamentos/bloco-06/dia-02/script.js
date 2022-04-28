// const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', function(event) {
//   event.preventDefault();
// })

// function formValidation(event) {
//   let nameInput = document.getElementById('name-input').value;
//   const emailInput = document.getElementById('email-input').value;
//   const aboutArea = document.getElementById('why').value;

//   if (nameInput.length < 10 || nameInput.length > 40) {
//     event.preventDefault();
//     alert('Dados Inválidos');
//   } else if (emailInput.length < 10 || emailInput.length > 50) {
//     event.preventDefault();
//     alert('Dados Inválidos');
//   } else if (aboutArea.length > 500) {
//     event.preventDefault();
//     alert('Dados Inválidos');
//   } else {
//     alert(
//       'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.'
//     );
//   }
// }

// submitButton.addEventListener('click', formValidation);

// https://stackoverflow.com/questions/59748563/show-alert-when-textbox-input-is-empty => Me ajudou

const datePicker = document.getElementById('date').DatePickerX.init({
  format: 'dd/mm/yyyy',
}); // Transformar input text para data

const validate = new window.JustValidate('#form'); // Deixar campos do form obrigatorios(validar).
validate
.addField('#name-input', [
  { rule: 'required', errorMessage: 'O campo de nome é obrigatório.' },
  { rule: 'minLength', value: 10 },
  { rule: 'maxLength', value: 40 }
])
.addField('#email-input', [
  { rule: 'required', errorMessage: 'O campo de email é obrigatório.' },
  { rule: 'minLength', value: 10 },
  { rule: 'maxLength', value: 50 }
])
.addField('#why', [
  { rule: 'required', errorMessage: 'O campo de resposta é obrigatório.' },
  { rule: 'maxLength', value: 500, errorMessage: 'O limite é de 500 caracteres.'}
])
.addField('#date', [
  { rule: 'required', errorMessage: 'O campo de data é obrigatório.'},
]);
