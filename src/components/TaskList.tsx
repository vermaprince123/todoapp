// TaskList.tsx
import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "../types";

function TaskList() {
  const tasks: Task[] = [
    { id: 1, text: "Brush teeth 🪥", completed: true },
    { id: 2, text: "Buy grocery 🛒", completed: false },
    { id: 3, text: "Pay rent 💰", completed: false },
    { id: 4, text: "Clean room ✔", completed: true },
  ];

  const handleDelete = (id: number) => {
    console.log("Delete task", id);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={() => handleDelete(task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
