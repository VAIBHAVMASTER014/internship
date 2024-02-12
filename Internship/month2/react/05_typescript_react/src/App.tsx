import React from "react";

// imported files
import Todos from "./components/Todos";
import Todo from "./modals/Todo";

function App() {
  const data = [new Todo("first todo task"), new Todo("second todo task")];
  return (
    <div>
      <Todos items={data} />
    </div>
  );
}

export default App;
