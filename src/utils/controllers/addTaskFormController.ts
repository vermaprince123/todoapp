import { Todo } from '../../services/interface/Todo';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../fn';

export const defaultTodo = {
  id: '',
  text: '',
  completed: false,
};
/**
 * Retrieves the array of todos from localStorage.
 * If no todos are found in localStorage, returns an empty array.
 * @returns {Todo[]} The array of todos.
 */
export const getTodosFromLocalStorage = (): Todo[] => {
  const todos = getDataFromLocalStorage('todos');
  return todos ? JSON.parse(todos) : [];
};

/**
 * Saves the array of todos to localStorage.
 * @param {Todo[]} todos - The array of todos to save.
 */
export const saveTodosToLocalStorage = (todos: Todo[]) => {
  saveDataToLocalStorage('todos', JSON.stringify(todos));
};
