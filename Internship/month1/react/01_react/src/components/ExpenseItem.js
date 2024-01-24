import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

//object destructuring can be also used instead of prop
// prop or {title,amount,date}

const ExpensItem = (prop) => {
  const expenseDate = prop.date;
  const expenseTitle = prop.title;
  const expenseAmount = prop.amount;

  return (
    <div className="transaction">
      <div className="expense-data">
        <ExpenseDate className="expense" date={expenseDate} />
        <div className="title">
          <span>{expenseTitle}</span>
        </div>
        <div className="amount">
          <span>{expenseAmount}</span>
        </div>
      </div>
    </div>
  );
};

export default ExpensItem;
