import React, { useState } from 'react';
import { TaskProvider } from './context/TaskContext';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import SearchBar from './components/SearchBar';

import './App.css';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term.toLowerCase());
  };

  return (
    <div className="todo-app">
    <TaskProvider>
      <h1>To-Do List</h1>
      <AddTaskForm />
      <SearchBar onSearch={handleSearch} />
      <Filter />
      <TaskList />
    </TaskProvider>
    </div>
  );
};

export default App;
