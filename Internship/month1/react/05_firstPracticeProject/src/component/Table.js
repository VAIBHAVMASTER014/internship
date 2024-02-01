import React from "react";

const Table = (props) => {
  return (
    <div>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {props.tableData.map((yearData,)=>{
            return <tr key = {yearData.year}>
            <td>{yearData.year}</td>
            <td>{yearData.savingsEndOfYear}</td>
            <td>{yearData.yearlyInterest}</td>
            <td>{yearData.savingsEndOfYear - props.ntialInvestment - (yearData.yearlyContribution * yearData.year)}</td>
            <td>{yearData.yearlyContribution}</td>
          </tr>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
