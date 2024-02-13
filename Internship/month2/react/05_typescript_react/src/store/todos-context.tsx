import React, { ReactNode, useState } from "react";

// imported files
import Todo from "../modals/Todo";

type TodosContextObj = {
    items: Todo[],
    addTodo: (text:string) => void;
    removeTodo: (id: string) => void;
}
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodoContextProvider: React.FC<{children:ReactNode}> = ( props ) => {

  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoTask: string) => {
    const newTodo = new Todo(todoTask);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue:TodosContextObj = {
    items:todos,
    addTodo:addTodoHandler,
    removeTodo:removeTodoHandler
  }

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
};

export default TodoContextProvider;
