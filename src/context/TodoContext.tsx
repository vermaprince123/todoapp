import React, { createContext, useContext, useEffect, useState } from 'react';
import { Todo } from '../services/interface/Todo';
import { getDataFromLocalStorage } from '../utils/fn';
import { saveTodosToLocalStorage } from '../utils/controllers/addTaskFormController';
import { Filter } from '../utils/constant';

interface TodoContextType {
  todos: Todo[];
  filterTodos: Todo[];
  filter: string;
  setFilter: (filter: string) => void;
  searchTodo: string;
  setSearchTodo: (todos: string) => void;
  addTodo: (todos: Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodoCompletion: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const { Completed, Incomplete, All } = Filter;
  const [todos, setTodos] = useState<Todo[]>(
    JSON.parse(getDataFromLocalStorage('todos') ?? '[]')
  );
  const [searchTodo, setSearchTodo] = useState<string>('');
  const [filterTodos, setFilterTodos] = useState<Todo[]>(todos);
  const [filter, setFilter] = useState<string>('');

  const addTodo = (todos: Todo) => {
    setTodos((prevTodo) => {
      const newTodo = [...prevTodo, todos];
      saveTodosToLocalStorage(newTodo);
      return newTodo;
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => {
      const newTodo = prevTodo.filter((todo) => todo.id !== id);
      saveTodosToLocalStorage(newTodo);
      return newTodo;
    });
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos((prevTodo) => {
      const newTodo = prevTodo.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      saveTodosToLocalStorage(newTodo);
      return newTodo;
    });
  };

  useEffect(() => {
    let filtered = todos;
    if (filter === Completed) {
      filtered = todos.filter((todo) => todo.completed);
    } else if (filter === Incomplete) {
      filtered = todos.filter((todo) => !todo.completed);
    } else if (filter === All) {
      filtered = todos;
    }

    if (searchTodo) {
      filtered = filtered.filter((todo) =>
        todo.text.toLowerCase().includes(searchTodo.toLowerCase())
      );
    }

    setFilterTodos(filtered);
  }, [filter, searchTodo, todos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        filterTodos,
        filter,
        setFilter,
        searchTodo,
        setSearchTodo,
        addTodo,
        deleteTodo,
        toggleTodoCompletion,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = (): TodoContextType => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }
  return context;
};
