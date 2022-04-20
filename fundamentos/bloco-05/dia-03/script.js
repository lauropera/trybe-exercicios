function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Ex. 1

function createDays() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  const daysList = document.getElementById('days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let liElement = document.createElement('li');
    let day = dezDaysList[index];

    if (day === 24 || day === 31) {
      liElement.className = 'day holiday';
      liElement.innerHTML = day;
      daysList.appendChild(liElement);
    } else if (day === 4 || day === 11 || day === 18) {
      liElement.className = 'day friday';
      liElement.innerHTML = day;
      daysList.appendChild(liElement);
    } else if (day === 25) {
      liElement.className = 'day holiday friday';
      liElement.innerHTML = day;
      daysList.appendChild(liElement);
    } else {
      liElement.className = 'day';
      liElement.innerHTML = day;
      daysList.appendChild(liElement);
    }
  }
}
createDays();

// Ex. 2
function createButton(buttonName, idName) {
  const buttonContainer = document.querySelector('.buttons-container');
  let buttonElement = document.createElement('button');
  buttonElement.innerHTML = buttonName;
  buttonElement.setAttribute('id', idName);
  buttonContainer.appendChild(buttonElement);
}
createButton('Feriados', 'btn-holiday');

// Ex. 3
const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', changeDayColor);

function changeDayColor() {
  const holidayClass = document.querySelectorAll('.holiday');
  for (const day of holidayClass) {
    if (day.style.backgroundColor === 'yellow') {
      day.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      day.style.backgroundColor = 'yellow';
    }
  }
}

// Ex. 4
createButton('Sexta-Feira', 'btn-friday');

// Ex. 5
// const fridayButton = document.getElementById('btn-friday');
// fridayButton.addEventListener('click', sextou);

// function sextou() {
//   const fridayClass = document.querySelectorAll('.friday');
//   for (let day of fridayClass) {
//     if (day.innerText === 'SEXTA-FEIRA') {
//       day.innerText = initialDay;
//     } else {
//       day.innerText = 'SEXTA-FEIRA';
//     }
//   }
// }

// Ex. 6
function zoomIn() {
  const daysList = document.getElementById('days');
  daysList.addEventListener('mouseover', function (event) {
    event.target.style.fontSize = '30px';
  });
}
function zoomOut() {
  const daysList = document.getElementById('days');
  daysList.addEventListener('mouseout', function (event) {
    event.target.style.fontSize = '20px';
  });
}
zoomIn();
zoomOut();

// Ex. 7

function addTask(task) {
  const myTasksList = document.querySelector('.my-tasks');
  let spanElement = document.createElement('span');
  spanElement.innerText = task;
  myTasksList.appendChild(spanElement);
}
addTask('Cozinhar');

// Ex. 8

function addTaskColor(color) {
  const myTasksList = document.querySelector('.my-tasks');
  let divElement = document.createElement('div');
  divElement.style.backgroundColor = color;
  divElement.className = 'task';
  myTasksList.appendChild(divElement);
}
addTaskColor('blue');

// Ex. 9

function selectTask() {
  const task = document.querySelector('.task');
  task.addEventListener('click', function () {
    if (task.className === 'task') {
      task.className = 'task selected';
      paintDay();
    } else {
      task.className = 'task';
    }
  });
}
selectTask();

// Ex. 10

function paintDay() {
  let selectedTask = document.querySelector('.selected');
  const days = document.querySelector('#days');
  days.addEventListener('click', function (event) {
    let color = selectedTask.style.backgroundColor;
    if (event.target.style.color === color) {
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      event.target.style.color = color;
    }
  });
}

// Bonus
function addCompromisso() {
  let buttonCompromisso = document.getElementById('btn-add');
  let inputCompromisso = document.getElementById('task-input');
  function adicionaCompromisso() {
      let input = document.getElementById('task-input').value;
      if (input.length === 0) {
        alert('Campo vazio.');
      }
      const compromissos = document.querySelector('.task-list');
      let liElement = document.createElement('li');
      liElement.innerText = input;
      compromissos.appendChild(liElement);
  }

  buttonCompromisso.addEventListener('click', adicionaCompromisso);
  inputCompromisso.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      adicionaCompromisso();
    }
  });
}

addCompromisso();