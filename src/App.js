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
  const [status, setStatus] = useState('temp');

  useEffect(() => {
    axios
      .get('https://task-list-api-c17.herokuapp.com/tasks')
      .then((response) => {
        const newTasks = response.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.isComplete,
          };
        });
        setStatus('done');
        setTaskData(newTasks);
      })
      .catch((error) => {
        console.log('error');
      });
  }, []);

  const setCompleteTask = (id) => {
    console.log('when complete', id);

    const newTaskData = taskData.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        let targetTask = 'mark_complete';
        if (!task.isComplete) {
          targetTask = 'mark_incomplete';
        }

        axios
          .patch(
            `https://task-list-api-c17.herokuapp.com/tasks/${id}/${targetTask}`
          )
          .then(() => setTaskData(newTaskData))
          .catch((error) => console.log('Errrrror'));
      }
      return task;
    });
  };

  const deleteTask = (id) => {
    axios
      .delete(`https://task-list-api-c17.herokuapp.com/tasks/${id}`)
      .then(() => {
        const deletedTasks = taskData.filter((task) => task.id !== id);
        console.log('deleted', id);
        setTaskData(deletedTasks);
      })
      .catch((error) => {
        console.log('errrrrrror');
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {status === 'temp' ? (
            `${status}`
          ) : (
            <TaskList
              tasks={taskData}
              updateMakeComplete={setCompleteTask}
              updateDeletedTask={deleteTask}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
