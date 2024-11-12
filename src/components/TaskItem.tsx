// TaskItem.tsx
import React from "react";
import { Task } from "../types";
import { useTaskContext } from "../context/TaskContext";

interface TaskItemProps {
  task: Task;
  onDelete: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDelete }) => {
  const { toggleTask } = useTaskContext();

  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <span
        className={`task-name ${task.completed ? "completed" : ""}`}
        onClick={() => toggleTask(task.id)}
      >
        {task.text}
      </span>
      <button className="delete-btn" onClick={onDelete}>
        X
      </button>
    </li>
  );
};

export default TaskItem;

