// TaskItem.tsx
import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { CustomButton, CustomSpan } from '../common';
import { Todo } from '../services/interface/Todo';

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
}

/**
 * A single TodoItem component that displays a single Todo item.
 *
 * Given a Todo object, it renders a single item with a checkbox and a text.
 * The checkbox is clickable and will trigger the toggleTodoCompletion function
 * when clicked.
 *
 * It also renders a delete button on the right side of the item. When clicked,
 * it will trigger the onDelete function.
 *
 * The item will be rendered with a different CSS class based on the completed
 * status of the Todo item.
 */
const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const { toggleTodoCompletion } = useTodoContext();
  const { completed, id, text } = todo;

  const className = completed ? 'completed' : '';
  return (
    <li className={`task-item ${className}`}>
      <div
        onClick={() => toggleTodoCompletion(id)}
        className="task-item-content"
      >
        <div className={`task-item-check-box ${className}`}>
          {completed ? '✔' : ''}
        </div>
        <CustomSpan className="task-name" text={text} />
      </div>
      <CustomButton onClick={onDelete} text="⨯" className="delete-btn" />
    </li>
  );
};

export default TodoItem;
