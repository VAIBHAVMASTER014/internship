const ExpenseDate = (props) => {
  const date = props.date;
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.toLocaleString("en-US", { day: "2-digit" });
  const day = date.getFullYear();

  return (
    <div className="date">
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
