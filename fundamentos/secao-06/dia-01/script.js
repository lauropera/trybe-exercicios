const submitButton = document.getElementById('submit-button');

// submitButton.addEventListener('click', function(event) {
//   event.preventDefault();
// })

function formValidation(event) {
  let nameInput = document.getElementById('name-input').value;
  const emailInput = document.getElementById('email-input').value;
  const aboutArea = document.getElementById('about-area').value;

  if (nameInput.length < 10 || nameInput.length > 40) {
    event.preventDefault();
    alert('Dados Inválidos');
  } else if (emailInput.length < 10 || emailInput.length > 50) {
    event.preventDefault();
    alert('Dados Inválidos');
  } else if (aboutArea.length > 500) {
    event.preventDefault();
    alert('Dados Inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

submitButton.addEventListener('click', formValidation);

// https://stackoverflow.com/questions/59748563/show-alert-when-textbox-input-is-empty => Me ajudou
