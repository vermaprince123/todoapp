import React, { useState, ChangeEvent, useEffect } from 'react';
import { CustomButton, CustomInput, CustomErrorMessage } from '../common';
import {
  ADD_TODO_FORM_BUTTON_TEXT,
  ADD_TODO_FORM_INPUT_TEXT_PLACEHOLDER,
} from '../utils/constant';
import {
  defaultTodo,
  getTodosFromLocalStorage,
} from '../utils/controllers/addTaskFormController';
import { Todo } from '../services/interface/Todo';
import { useTodoContext } from '../context/TodoContext';
import './todoAddForm.css';
const TodoAddForm = () => {
  const [task, setTask] = useState<Todo>(defaultTodo);
  const [error, setError] = useState<string>('');
  const { addTodo } = useTodoContext();

  const handleAddTask = () => {
    if (!task.text) {
      setError('Task cannot be empty.');
      return;
    }
    setError('');
    setTask(defaultTodo);
    addTodo({ ...task, id: getTodosFromLocalStorage().length + 1 });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({
      ...prevTask,
      text: e.target.value,
    }));
    if (e.target.value) {
      setError(''); // Clear error message as user types
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="add-task-form">
      <CustomInput
        value={task.text}
        onChange={handleChange}
        placeholder={ADD_TODO_FORM_INPUT_TEXT_PLACEHOLDER}
        onKeyDown={handleKeyDown}
      />
      {error && <CustomErrorMessage error={error} />}
      <CustomButton className="add-task-form-button" onClick={handleAddTask} text={ADD_TODO_FORM_BUTTON_TEXT} />
    </div>
  );
};

export default TodoAddForm;
