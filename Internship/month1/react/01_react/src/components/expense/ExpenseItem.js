import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import BgCard from "../../ui/BgCard";

//object destructuring can be also used instead of prop
// prop or {title,amount,date}

const ExpensItem = (prop) => {
  const expenseDate = prop.date;
  const expenseAmount = prop.amount;
  return (
    <BgCard className="transaction">
      <ExpenseDate className="expense" date={expenseDate} />
      <div className="expense-data">
        <div className="title">
          <span>{prop.title}</span>
        </div>
        <div>
          <span className="amount">&#8377;{expenseAmount}</span>
          
        </div>
      </div>
    </BgCard>
  );
};

export default ExpensItem;
