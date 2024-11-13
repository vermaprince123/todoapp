import React from 'react';
import './todoHeader.css';
import TodoSearchBar from './TodoSearchBar';
import TodoFilter from './TodoFilter';
interface HeaderProps {
  title: string;
}

function TodoHeader({ title }: HeaderProps) {
  return (
    <div className="todo-header">
      <h1>{title}</h1>
      <TodoSearchBar />
      <TodoFilter />
    </div>
  )
}

export default TodoHeader;
