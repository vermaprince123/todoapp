import React, { useState } from 'react';
import TodoItem from './TadoItem';
import ShimmerBox from '../common/ShimmerBox';
import { useTodoContext } from '../context/TodoContext';
import './todoList.css';
import { generateRandomId } from '../utils/fn';
const TodoList = () => {
  const [loading, setLoading] = useState(true);
  const { filterTodos, deleteTodo } = useTodoContext();

  setTimeout(() => setLoading(false), 4000);

  const TaskList = () => {
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
    )
  }

  const ShimmerLoader = () => {
    return (<div className="task-list-loader">
      <ShimmerBox />
    </div>
    );
  }

  return (
    loading ? <ShimmerLoader /> : <TaskList/>
  );
};

export default TodoList;
