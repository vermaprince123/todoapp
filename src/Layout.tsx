import React from 'react';
import {
  TodoAddForm,
  TodoList,
  TodoFilter,
  TodoSearchBar,
  TodoHeader,
} from './components/';
import './layout.css';
import { HEADER_TITLE } from './utils/constant';
import { TodoProvider } from './context/TodoContext';

const Layout = () => {
  return (
    <TodoProvider>
      <div className="app-container">
        <div className="todo-app">
          <TodoHeader title={HEADER_TITLE} />
          <TodoSearchBar />
          <TodoFilter />
          <TodoList />
          <TodoAddForm />
        </div>
      </div>
    </TodoProvider>
  );
};

export default Layout;
