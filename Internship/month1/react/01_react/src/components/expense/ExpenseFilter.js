import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const clickHandler = (event) => {
    props.onSelectYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <span className="filter-sentence">Filter by year</span>
      <select
        value={props.selected}
        className="filter-btn"
        onChange={clickHandler}
      >
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
