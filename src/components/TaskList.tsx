// TaskList.tsx
import React from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
  onDelete: () => void;
};

const TaskItem: React.FC<Task> = ({ text, completed, onDelete }) => {
  return (
    <div className={`task-item ${completed ? "completed" : ""}`}>
      <span>{text}</span>
      <button onClick={onDelete}>&times;</button>
    </div>
  );
};

function TaskList() {
  const tasks = [
    { id: 1, text: "Brush teeth 🪥", completed: true },
    { id: 2, text: "Buy grocery 🛒", completed: false },
    { id: 3, text: "Pay rent 💰", completed: false },
    { id: 4, text: "Clean room ✔", completed: true },
  ];

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          id={task.id}
          key={task.id}
          text={task.text}
          completed={task.completed}
          onDelete={() => console.log("Delete task", task.id)}
        />
      ))}
    </div>
  );
}

export default TaskList;
