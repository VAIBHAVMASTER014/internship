import Expense from "./components/Expense";
function App() {
  const expenses = [
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
    { title: "car Insurance", amount: 300, date: new Date(2024, 1, 11) },
  ];
  return (
    <div className="App">
      <Expense  expense={expenses} />
    </div>
  );
}

export default App;
