import React from "react";

import "./Expense.css";

import BgCard from "../../ui/BgCard";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

const Expense = (props) => {
  const expenseData = props.expense;
  const [filterdYear, setFilterdYear] = React.useState("2021");

  const changeFilterdYear = (selectedYear) => {
    setFilterdYear((prevState) => {
      return selectedYear;
    });
  };
  const filteredYearData = expenseData.filter((object) => {
    return object.date.getFullYear().toString() === filterdYear;
  });

  return (
    <BgCard className="expense">
      <ExpenseFilter selected={filterdYear} onSelectYear={changeFilterdYear} />
      <ExpenseChart expenses={filteredYearData}/>
      <ExpenseList filteredData={filteredYearData} />
    </BgCard>
  );
};

export default Expense;

// {/* {filteredYearData.length === 0 ? (
//   <p className="expense-info">No expenses found</p>
// ) : (
//   filteredYearData.map((expense) => (
//     <ExpenseItem
//       key={expense.id}
//       title={expense.title}
//       amount={expense.amount}
//       date={expense.date}
//     />
//   ))
// )} */}

// {/* {filteredYearData.length === 0 && (
//   <p className="expense-info">No expenses found</p>
// )} */}
