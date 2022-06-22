import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

// const Task = ({ id, title, isComplete }) => {

const Task = (props) => {
  const taskId = props.id;
  const taskTitle = props.title;
  const taskComplete = props.isComplete;
  const buttonClass = taskComplete ? 'tasks__item__toggle--completed' : '';
  const updateMakeComplete = props.updateMakeComplete;
  const updateDeletedTask = props.updateDeletedTask;

  const makeComplete = () => {
    updateMakeComplete(taskId);
  };

  const deleteTask = () => {
    updateDeletedTask(taskId);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={() => makeComplete()}
      >
        {taskTitle}
      </button>

      <button
        className="tasks__item__remove button"
        data-testid={`delete button ${taskId}`}
        onClick={() => deleteTask()}
      >
        x
      </button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  updateMakeComplete: PropTypes.func.isRequired,
  updateDeletedTask: PropTypes.func.isRequired,
};

export default Task;
