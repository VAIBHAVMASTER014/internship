import React from "react";
import { useReducer, useState } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  //   const [todos, dispatch] = useReducer(reducer, initialTodos);

  const [allTodos, setAllTodos] = useState(initialTodos);

  const handleComplete = (todo) => {
    // dispatch({ type: "COMPLETE", id: todo.id });
    
    setAllTodos(
        allTodos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, complete: !todo.complete };
            } else {
                return item;
            }
        })
        );
        console.log(allTodos);

  };

  return (
    <>
      {allTodos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todos />);

export default Todos;
