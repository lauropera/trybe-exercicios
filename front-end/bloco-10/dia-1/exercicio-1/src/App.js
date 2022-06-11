import { Component } from 'react';

const Task = (value) => {
  return <li>{value}</li>;
};

const tasksToDo = ['Codar', 'Jogar', 'Ouvir música'];

class App extends Component {
  render() {
    return (
      <div>
        <ul className='task-list'>{tasksToDo.map((item) => Task(item))}</ul>
      </div>
    );
  }
}

export default App;
