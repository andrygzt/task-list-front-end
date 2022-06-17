import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

const App = () => {
  const TASKS = [
    {
      id: 1,
      title: 'Mow the lawn',
      isComplete: false,
    },
    {
      id: 2,
      title: 'Cook Pasta',
      isComplete: true,
    },
  ];

  const setCompleteTask = (id) => {
    console.log('when complete', id);
    const completed = [...task];
    if (task.id === true) {
      // makeComplete
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>{<TaskList tasks={TASKS} />}</div>
      </main>
    </div>
  );
};

export default App;
