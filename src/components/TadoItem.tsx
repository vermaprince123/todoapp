// TaskItem.tsx
import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { CustomButton, CustomSpan } from '../common';
import { Todo } from '../services/interface/Todo';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const { toggleTodoCompletion } = useTodoContext();
  const { completed, id, text } = todo;

  const className = completed ? 'completed' : '';
  return (
    <li className={`task-item ${className}`}>
      <div className={`task-item-check-box ${className}`}>
        {completed ? "✔" : ""}
      </div>
      <CustomSpan
        className="task-name"
        text={text}
        onClick={() => toggleTodoCompletion(id)}
      />
      <CustomButton onClick={onDelete} text="⨯" className="delete-btn" />
    </li>
  );
};

export default TodoItem;
