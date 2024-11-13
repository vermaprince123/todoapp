import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import { CustomButton } from '../common';
import { Filter } from '../utils/constant';
import './todoFilter.css';
const TodoFilter = () => {
  const { filter, setFilter } = useTodoContext();
  const { All, Completed, Incomplete } = Filter;

  const isActive = (status: string) => (status === filter ? 'active' : '');
  const getClass = (status: string) => `filter-btn ${isActive(status)}`;

  
  return (
    <div className="filter-btns">
      <CustomButton
        className={getClass(All)}
        onClick={() => setFilter(All)}
        disabled={filter === All}
        text={All}
      />
      <CustomButton
        className={getClass(Completed)}
        onClick={() => setFilter(Completed)}
        disabled={filter === Completed}
        text={Completed}
      />
      <CustomButton
        className={getClass(Incomplete)}
        onClick={() => setFilter(Incomplete)}
        disabled={filter === Incomplete}
        text={Incomplete}
      />
    </div>
  );
};

export default TodoFilter;
