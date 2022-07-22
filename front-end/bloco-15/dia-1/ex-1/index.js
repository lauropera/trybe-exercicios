const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  const { colors, index } = state;
  switch (action.type) {
    case 'NEXT_COLOR':
      return {
        ...state,
        index: (index + 1) % colors.length,
      };
    case 'PREVIOUS_COLOR':
      return {
        ...state,
        index: index === 0 ? colors.length - 1 : index - 1,
      };
    case 'NEW_COLOR':
      return {
        colors: [...colors, action.payload],
        index: colors.length,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

function criarCor() {
  const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let cor = '#';
  const aleatorio = () => Math.floor(Math.random() * oneChar.length);
  for (let i = 0; i < 6; i += 1) {
      cor += oneChar[aleatorio()];
  }
  return cor;
}

const addColor = () => {
  const color = criarCor();
  store.dispatch({
    type: 'NEW_COLOR',
    payload: color,
  });
}

const nextColor = () => {
  store.dispatch({
    type: 'NEXT_COLOR',
  });
};

const previousColor = () => {
  store.dispatch ({
    type: 'PREVIOUS_COLOR',
  });
};

const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const randomColorBtn = document.querySelector('#random');

previousBtn.addEventListener('click', previousColor);
nextBtn.addEventListener('click', nextColor);
randomColorBtn.addEventListener('click', addColor)

const colorText = document.querySelector('#value');
const container = document.querySelector('#container');

store.subscribe(() => {
  const { colors, index } = store.getState();
  colorText.innerHTML = colors[index];
  container.style.backgroundColor = colors[index];
});
