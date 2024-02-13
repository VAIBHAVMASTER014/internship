import React, { useRef, useContext } from "react";

import { TodosContext } from "../../store/todos-context";

// css files
import classes from "./NewTodo.module.css";
const NewTodos: React.FC = () => {
  const taskInput = useRef<HTMLInputElement>(null);

  const todosCtx = useContext(TodosContext);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = taskInput.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Task</label>
      <input ref={taskInput} type="text" id="text"></input>
      <button>Add Task</button>
    </form>
  );
};

export default NewTodos;
