import React from 'react';
import { Task } from '../types';
import { useTaskContext } from '../context/TaskContext';

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <li>
      <span onClick={() => toggleTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
