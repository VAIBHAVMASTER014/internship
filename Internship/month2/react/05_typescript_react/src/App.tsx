import React from "react";

// imported files
import Todos from "./components/Todos";
import NewTodos from "./components/NewTodo/NewTodos";
import TodoContextProvider from "./store/todos-context";

function App() {
 
  return (
    <TodoContextProvider>
      <NewTodos  />
      <Todos  />
    </TodoContextProvider>
  );
}

export default App;
