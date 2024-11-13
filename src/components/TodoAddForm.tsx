import React, { useState, ChangeEvent } from 'react';
import { CustomButton, CustomInput, CustomErrorMessage } from '../common';
import {
  ADD_TODO_FORM_BUTTON_TEXT,
  ADD_TODO_FORM_INPUT_TEXT_PLACEHOLDER,
} from '../utils/constant';
import { defaultTodo } from '../utils/controllers/addTaskFormController';
import { Todo } from '../services/interface/Todo';
import { useTodoContext } from '../context/TodoContext';
import { generateRandomId } from '../utils/fn';
import { isStringEmpty } from '../utils/validation/validation';
import './todoAddForm.css';
/**
 * Form component for adding a new task
 * @returns {JSX.Element} form for adding a new task
 */
const TodoAddForm = () => {
  const [task, setTask] = useState<Todo>(defaultTodo);
  const [error, setError] = useState<string>('');
  const { addTodo } = useTodoContext();

  /**
   * Handles adding a new task.
   * Checks if the text is empty and displays an error if so.
   * Otherwise, clears the error, resets the task state, and adds the task to the list.
   */
  const handleAddTask = () => {
    if (isStringEmpty(task.text)) {
      setError('Task cannot be empty.');
      return;
    }
    setError('');
    setTask(defaultTodo);

    addTodo({
      id: generateRandomId(),
      text: task.text.trim(),
      completed: false,
    });
  };

  /**
   * Handles the change event for the task input field.
   *
   * Updates the task state with the new input value and clears any existing error message if the input is not empty.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event from the input element.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prevTask) => ({
      ...prevTask,
      text: e.target.value,
    }));
    if (e.target.value) {
      setError('');
    }
  };

  /**
   * Handles the key down event for the task input field.
   *
   * Listens for the 'Enter' key press and triggers the handleAddTask function
   * to add the current task if the 'Enter' key is pressed.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keyboard event from the input element.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <footer>
      <div className="add-task-form">
        <CustomInput
          value={task.text}
          onChange={handleChange}
          placeholder={ADD_TODO_FORM_INPUT_TEXT_PLACEHOLDER}
          onKeyDown={handleKeyDown}
        />
        {error && <CustomErrorMessage error={error} />}
        <CustomButton
          className="add-task-form-button"
          onClick={handleAddTask}
          text={ADD_TODO_FORM_BUTTON_TEXT}
        />
      </div>
    </footer>
  );
};

export default TodoAddForm;
