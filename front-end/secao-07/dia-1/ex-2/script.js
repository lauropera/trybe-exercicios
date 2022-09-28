const THEME_INITIAL_STATE = {
  theme: 'dark',
};

const themeReducer = (state = THEME_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_THEME': {
      return {
        theme: state.theme === 'dark' ? 'light' : 'dark',
      };
    }
    default:
      return state;
  }
};

const STATUS_INITIAL_STATE = {
  status: 'offline',
};

const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CHANGE_STATUS': {
      return {
        status: state.status === 'offline' ? 'online' : 'offline',
      };
    }
    default:
      return state;
  }
};

const mergedReducer = Redux.combineReducers({
  themeReducer,
  statusReducer,
});

const store = Redux.createStore(mergedReducer);

const themeButton = document.getElementById('toggle-theme');
const statusButton = document.getElementById('toggle-status');
const statusText = document.getElementById('status');

themeButton.addEventListener('click', () => {
  store.dispatch({ type: 'CHANGE_THEME' });
});

store.subscribe(() => {
  const {
    themeReducer: { theme },
    statusReducer: { status },
  } = store.getState();
  document.body.style.backgroundColor = theme === 'light' ? 'white' : '#333';
  document.body.style.color = theme === 'light' ? 'black' : 'white';
  document.body.style.transition = '0.6s'
  themeButton.innerText = theme === 'light' ? 'Dark Mode' : 'Light Mode'
  statusText.innerText = status === 'online' ? 'Online' : 'Offline';
  statusButton.innerText = status === 'online' ? 'Ficar Offline' : 'Ficar Online';
});

statusButton.addEventListener('click', () => {
  store.dispatch({ type: 'CHANGE_STATUS' });
});
