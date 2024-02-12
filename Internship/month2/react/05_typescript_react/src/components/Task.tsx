import React from "react";
import Todo from "../modals/Todo";

const Task: React.FC<{ task: Todo }> = ({ task }) => {
  return (
    <div>
      {" "}
      <li key={task.id}>{task.text}</li>
    </div>
  );
};

export default Task;
