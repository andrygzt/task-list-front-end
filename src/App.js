import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

// const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: false,
//   },
// ];

const App = () => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log('error');
      });
  }, []);

  const setCompleteTask = (id) => {
    console.log('when complete', id);

    let targetTask;

    const newTaskData = taskData.map((task) => {
      const newTask = { ...task };
      if (newTask.taskId === id) {
        targetTask = task;
      }

      return newTask;
    });
    axios.patch(
      `https://task-list-api-c17.herokuapp.com/tasks/${targetTask.id}`
    ),
      {
        isComplete: targetTask.isComplete,
      }
        .then((response) => {
          targetTask.isComplete = !targetTask.isComplete;
          setTaskData(newTaskData);
        })
        .catch((error) => {
          console.log('Errrrror');
        });
  };

  const deleteTask = (id) => {
    console.log('deleted', id);
    const completedTasks = taskData.filter((task) => task.id !== id);
    setTaskData(completedTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={taskData}
            updateMakeComplete={setCompleteTask}
            updateDeletedTask={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
