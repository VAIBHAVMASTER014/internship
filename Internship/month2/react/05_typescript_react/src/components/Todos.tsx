import React from "react";
// importe files
import Todo from "../modals/Todo";
import Task from "./Task";
const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
         <Task task={item}/>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
