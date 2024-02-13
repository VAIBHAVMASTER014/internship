import React from "react";

// imported files
import Todo from "../modals/Todo";

// css files
import classes from "./Task.module.css";

const Task: React.FC<{ task: Todo; onRemoveTodo: () => void }> = ({
  task,
  onRemoveTodo,
}) => {
  return (
    <>
      {" "}
      <li key={task.id} className={classes.item} onClick={onRemoveTodo}>
        {task.text}
      </li>
    </>
  );
};

export default Task;
