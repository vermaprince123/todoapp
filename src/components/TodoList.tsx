import React from 'react';
import TodoItem from './TadoItem';
import { useTodoContext } from '../context/TodoContext';
import './todoList.css';
import { generateRandomId } from '../utils/fn';
const TodoList = () => {
  const { filterTodos, deleteTodo } = useTodoContext();

  return (
    <div className="task-list">
      {filterTodos.map((todo) => (
        <TodoItem
          key={generateRandomId()}
          todo={todo}
          onDelete={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
