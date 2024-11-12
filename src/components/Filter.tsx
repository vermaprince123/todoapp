import React from 'react';
import { useTaskContext } from '../context/TaskContext';

const Filter: React.FC = () => {
  const { filter, setFilter } = useTaskContext();

  return (
    <div className="filter-btns">
      <button className="filter-btn active" onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
      <button className="filter-btn" onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
      <button className="filter-btn" onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>Incomplete</button>
    </div>
  );
};

export default Filter;
