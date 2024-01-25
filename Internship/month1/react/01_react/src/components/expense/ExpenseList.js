import React from "react";

import "./Expense.css";
import ExpensItem from "./ExpenseItem";
const ExpenseList = (props) => {
  if (props.filteredData.length === 0) {
    return <p className="expense-info">No expenses found</p>;
  }

  return (
    <div>
      {props.filteredData.map((expense) => (
        <ExpensItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
