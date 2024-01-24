import Expense from "./components/Expense";
import NewExpense from "./components/newExpense/NewExpense";
function App() {
  const expenses = [
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
  ];

  const addNewExpense = (expense) => {
    const data ={
      ...expense,
    }
    console.log("In App.js")
    console.log(data);
  }
  return (
    <div className="App">
      <NewExpense onAddExpense={addNewExpense}/>
      <Expense  expense={expenses} />
    </div>
  );
}

export default App;
