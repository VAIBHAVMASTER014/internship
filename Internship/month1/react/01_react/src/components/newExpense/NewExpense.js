import React from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  
  const handleExpenseData = (expenseData) => {
    const savedExpenseData = {
      ...expenseData,
      id:Math.random().toString() ,
    }
    console.log(savedExpenseData)
    props.onAddExpense(savedExpenseData)
  }
  return (
    <div >
      <ExpenseForm onSaveExpenseData = {handleExpenseData} />
    </div>
  );
};

export default NewExpense;
