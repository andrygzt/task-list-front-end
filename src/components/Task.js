import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Task.css';

// const Task = ({ id, title, isComplete }) => {
//   const [complete, setComplete] = useState(isComplete);

const Task = (props) => {
  const taskId = props.id;
  const taskTitle = props.title;
  const taskComplete = props.isComplete;
  const buttonClass = taskComplete ? 'tasks__item__toggle--completed' : '';

  const makeComplete = () => {
    props.setCompleteCallBack(props.id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={{ makeComplete }}
      >
        {taskTitle}
      </button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  setCompleteCallBack: PropTypes.func.isRequired,
};

export default Task;
