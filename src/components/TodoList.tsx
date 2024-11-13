import React from 'react';
import TodoItem from './TodoItem';
import { useTodoContext } from '../context/TodoContext';
import withLoadingList from '../hoc/withLoadingList';
import { Todo } from '../services/interface/Todo';
import './todoList.css';

const EnhancedList = withLoadingList(
  ({ items, itemRenderer }: { items: Todo[]; itemRenderer: any }) => {
    return items.map((item: Todo, index: number) => itemRenderer(item, index));
  }
);

/**
 * Renders a list of todo items with the ability to delete them.
 * The list is enhanced with a higher-order component that handles loading state.
 * The todo items are filtered based on the context's `filterTodos` function.
 */
const TodoList = () => {
  const { filterTodos, deleteTodo } = useTodoContext();

  const renderTodoItem = (todo: Todo) => (
    <TodoItem todo={todo} onDelete={() => deleteTodo(todo.id)} />
  );

  return (
    <EnhancedList
      items={filterTodos}
      itemSize={60}
      itemRenderer={renderTodoItem}
    />
  );
};

export default TodoList;
