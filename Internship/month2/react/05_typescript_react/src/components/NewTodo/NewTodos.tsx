import React,{useRef} from "react";

const NewTodos = () => {
    const taskInput = useRef();

    const submitHandler = (event:React.FormEvent)=>{
        event.preventDefault();

    }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Task</label>
      <input ref = {taskInput} type="text" id="text"></input>
      <button  >Add Task</button>
    </form>
  );
};

export default NewTodos;
