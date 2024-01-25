import React from 'react';
import Expense from "./components/expense/Expense";
import NewExpense from "./components/newExpense/NewExpense";
function App() {
  const [expenses,setExpense] = React.useState([
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
  ]);

  const addNewExpense = (expense) => {
    
   
    setExpense((prevData)=>{
      return [expense, ...prevData];
    })

  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addNewExpense}/>
      <Expense  expense={expenses} />
    </div>
  );
}

export default App;
