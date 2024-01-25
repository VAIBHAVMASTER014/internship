import React from 'react'
import Chart from '../chart/Chart';

const ExpenseChart = (props) => {
    const chartDataPoints = [
        {lable:'January' ,value:0},
        {lable:'February' ,value:0},
        {lable:'March' ,value:0},
        {lable:'April' ,value:0},
        {lable:'May' ,value:0},
        {lable:'June' ,value:0},
        {lable:'July' ,value:0},
        {lable:'Augst' ,value:0},
        {lable:'September' ,value:0},
        {lable:'October' ,value:0},
        {lable:'November' ,value:0},
        {lable:'December' ,value:0}
    ];

    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value = expense.amount; 
    }
  return (
    <div>
        <Chart dataPoints = {chartDataPoints}/>
    </div>
  )
}

export default ExpenseChart