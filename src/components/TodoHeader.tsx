import React from 'react';
import TodoSearchBar from './TodoSearchBar';
import TodoFilter from './TodoFilter';
import './todoHeader.css';
interface HeaderProps {
  title: string;
}

/**
 * The TodoHeader component renders the title of the application,
 * a search bar for todos, and a filter for selecting which todos
 * to display.
 *
 * Props:
 *  - title: The title of the application.
 *
 * @param {HeaderProps} props
 * @returns {JSX.Element} A JSX element representing the header of the application.
 */
const TodoHeader = ({ title }: HeaderProps) => {
  return (
    <header>
      <div className="todo-header">
        <h1>{title}</h1>
        <TodoSearchBar />
        <TodoFilter />
      </div>
    </header>
  );
};

export default TodoHeader;
