import React, { useState, ChangeEvent, useCallback } from 'react';
import { SEARCH_TODO_INPUT_PLACEHOLDER } from '../utils/constant';
import { CustomInput } from '../common';
import { useTodoContext } from '../context/TodoContext';
import { debounce } from '../utils/fn';
import { Search } from '@mui/icons-material';
import './todoSearchBar.css';

/**
 * A search bar component that allows users to search their todos.
 *
 * The search bar is debounced so that it only searches for todos after the user has stopped typing for 1 second.
 *
 * @returns A JSX element representing the search bar.
 */
const TodoSearchBar = () => {
  const [text, setText] = useState('');
  const { setSearchTodo } = useTodoContext();

  const debouncedSearch = useCallback(
    debounce((value: string) => setSearchTodo(value), 1000),
    [] // Empty dependency array ensures this function is memoized
  );

  /**
   * Handles the change event for the search input.
   *
   * Updates the search text state and triggers a debounced search
   * for todos based on the current input value.
   *
   * @param {ChangeEvent<HTMLInputElement>} e - The change event from the input element.
   */
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <div className="search-icon">
        <Search />
      </div>
      <div className="search-input">
        <CustomInput
          value={text}
          onChange={handleChange}
          placeholder={SEARCH_TODO_INPUT_PLACEHOLDER}
        />
      </div>
    </div>
  );
};

export default TodoSearchBar;
