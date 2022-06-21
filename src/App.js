import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: false,
  },
];
const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const setCompleteTask = (id) => {
    console.log('when complete', id);
    const newTaskData = taskData.map((task) => {
      const newTask = { ...task };
      if (newTask.id === id) {
        newTask.isComplete ? true : false;
      }
      return newTask;
    });
    setTaskData(newTaskData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList tasks={taskData} updateMakeComplete={setCompleteTask} />
        </div>
      </main>
    </div>
  );
};

export default App;
