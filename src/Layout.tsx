import React from 'react';
import { TodoAddForm, TodoList, TodoHeader } from './components/';
import { HEADER_TITLE } from './utils/constant';
import { TodoProvider } from './context/TodoContext';
import './layout.css';

/**
 * Layout component provides the primary structure for the todo application.
 * It wraps the application with context providers for filter and todo state management.
 * Components included:
 *  - TodoHeader: Displays the header of the application.
 *  - TodoList: Renders the list of todos.
 *  - TodoAddForm: Allows adding new todos.
 */
const Layout = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <div className="todo-app">
          <TodoHeader title={HEADER_TITLE} />
          <TodoList />
          <TodoAddForm />
        </div>
      </div>
    </TodoProvider>
  );
};

export default Layout;
