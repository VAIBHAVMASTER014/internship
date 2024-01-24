import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import BgCard from "../ui/BgCard";
//object destructuring can be also used instead of prop
// prop or {title,amount,date}

const ExpensItem = (prop) => {
  const [title, setTitle] = useState(prop.title);
  const expenseDate = prop.date;
  const expenseAmount = prop.amount;

  const clickHandler = () => {
    setTitle("updated!!!!");
  };
  return (
    <BgCard className="transaction">
      <ExpenseDate className="expense" date={expenseDate} />
      <div className="expense-data">
        <div className="title">
          <span>{title}</span>
        </div>
        <div className="amount">
          <span>{expenseAmount}</span>
        </div>
        <button onClick={clickHandler}>change_Title</button>
      </div>
    </BgCard>
  );
};

export default ExpensItem;
