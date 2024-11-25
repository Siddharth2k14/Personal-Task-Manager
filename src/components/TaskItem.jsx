import React from "react";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
