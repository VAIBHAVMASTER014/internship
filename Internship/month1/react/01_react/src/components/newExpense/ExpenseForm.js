import React from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = React.useState("");
  const [enteredAmount, setAmount] = React.useState("");
  const [enteredDate, setDate] = React.useState("");

  // const [userInfo, setUserInfo] = React.useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);

    // setUserInfo({ ...userInfo, title: event.target.value });

    // setUserInfo((prevState) => {
    //   return ({...prevState,title: event.target.value});
    // })
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);

    // setUserInfo((prevState) => {
    //   return ({...prevState,amount: event.target.value});
    // })
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);

    // setUserInfo({ ...userInfo, date: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setDate('');
   
  };
  return (
    <div>
      <form className="expense-form" onSubmit={submitHandler}>
        <div className="expense-field">
          <div>
            <label>Title</label>
            <input
              type="text"
              id="expense"
              value={enteredTitle}
              onChange={titleChangeHandler}
              // onChange={(event) => {
              //   inputChangeHandler("title", event.target.value);
              // }}
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

              // onChange={(event) => {
              //   inputChangeHandler("date", event.target.value);
              // }}
            />
          </div>
        </div>
        <button>Add Expense</button>
      </form>
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
