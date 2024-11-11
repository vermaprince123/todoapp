// AddTaskForm.tsx
import React, { useState } from "react";

function AddTaskForm() {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      console.log("Add task:", task);
      setTask("");
    }
  };

  return (
    <div className="add-task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Type something"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTaskForm;
