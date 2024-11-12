import React, { useState } from 'react';
import { SEARCH_TODO_INPUT_PLACEHOLDER } from '../utils/constant';
import { CustomInput } from '../common';
import { useTodoContext } from '../context/TodoContext';
import { debounce } from '../utils/fn';
import './todoSearchBar.css';

const TodoSearchBar = () => {
  const [text, setText] = useState('');
  const { setSearchTodo } = useTodoContext();

  const debouncedSearch = debounce(
    (value: string) => setSearchTodo(value),
    1000
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <CustomInput
        value={text}
        onChange={handleChange}
        placeholder={SEARCH_TODO_INPUT_PLACEHOLDER}
      />
    </div>
  );
};

export default TodoSearchBar;
