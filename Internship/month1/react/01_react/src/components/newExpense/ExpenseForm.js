import React from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = React.useState("");
  const [enteredAmount, setAmount] = React.useState("");
  const [enteredDate, setDate] = React.useState("");
  const [display, setDisplay] = React.useState("button");

  const changeDisplayContent = () => {
    setDisplay("form");
  };
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setDisplay("button");
  };

  return (
    <div>
      {display === "button" ? (
        <div className="expense-form ">
          <button className="expense-btn" onClick={changeDisplayContent}>Add new expense</button>
        </div>
      ) : (
        <div className="expense-form">
          <form className="expense-form" onSubmit={submitHandler}>
            <div className="expense-field">
              <div>
                <label>Title</label>
                <input
                  type="text"
                  id="expense"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                  placeholder="Write title"
                />
              </div>
              <div>
                <label>Amount</label>
                <input
                  type="text"
                  id="expense"
                  //two way binding in react
                  //================================================
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                  //================================================

                  placeholder="Write amount"
                />
              </div>
              <div>
                <label>Date</label>
                <input
                  type="date"
                  id="expense"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
              </div>
            </div>
            <button className="expense-form-button">Add Expense</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ExpenseForm;

//alternative for change the value of state :================================
// const inputChangeHandler = (identifier, value) => {
//   if (identifier === "title") {
//     setTitle(value);
//   }
//   if (identifier === "amount") {
//     setAmount(value);
//   }
//   if (identifier === "date") {
//     setDate(value);
//   }
// };
//================================================================================================

// setUserInfo((prevState) => {
//   return ({...prevState,date: event.target.value});
// })
//================================================================================================
// setUserInfo({ ...userInfo, amount: event.target.value });

//================================================================================================
// setAmount(event.target.value);
//================================================================================================
