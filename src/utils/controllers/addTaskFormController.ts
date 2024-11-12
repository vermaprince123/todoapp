import { Todo } from '../../services/interface/Todo';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../fn';

export const defaultTodo = {
  id: 0,
  text: '',
  completed: false,
};
export const getTodosFromLocalStorage = (): Todo[] => {
  const todos = getDataFromLocalStorage('todos');
  return todos ? JSON.parse(todos) : [];
};

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  saveDataToLocalStorage('todos', JSON.stringify(todos));
};
