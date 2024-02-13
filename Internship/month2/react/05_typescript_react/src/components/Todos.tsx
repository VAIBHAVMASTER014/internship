import React,{useContext} from "react";

// importe files
import { TodosContext } from "../store/todos-context"
import Task from "./Task";

//  css files
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx =useContext(TodosContext);
  return (
    <>
      <ul className={classes.todos}>
        {todosCtx.items.map((item) => (
          <Task onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)} task={item} />
        ))}
      </ul>
    </>
  );
};

export default Todos;
