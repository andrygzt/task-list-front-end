import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css';

const TaskForm = ({ onAddTaskCallBack }) => {
  const [newTaskData, setNewTaskData] = useState({
    title: '',
    isComplete: false,
  });
  const submitNewTaskData = (e) => {
    e.preventDefault();

    onAddTaskCallBack({
      ...newTaskData,
      isComplete: newTaskData.isComplete === 'true',
    });
    setNewTaskData({ title: '', isComplete: false });
  };

  const handleChange = (e) => {
    setNewTaskData({ ...newTaskData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitNewTaskData} className="new-task__form">
      <section>
        <h2>Add new task</h2>
        <div className="new-task__fields">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            id="title"
            value={newTaskData.title}
            onChange={handleChange}
          />
          <label htmlFor="isComplete">isComplete</label>
          <input
            name="isComplete"
            id="isComplete"
            value={newTaskData.isComplete}
            onChange={handleChange}
          />
          <option value="true" data-testid="select-option">
            Yes
          </option>
          <option value="false" data-testid="select-option">
            No
          </option>
          <button className="button new-task__submit" type="submit">
            Submit a new task
          </button>
        </div>
      </section>
    </form>
  );
};
TaskForm.propTypes = {
  onAddTaskCallBack: PropTypes.func.isRequired,
};
export default TaskForm;
