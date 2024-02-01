import React from 'react';

import Form from "./component/Form";
import Header from "./component/Header";
import Table from "./component/Table";

function App() {
  const [userInput,setUserInput] = React.useState('');
  const calculateHandler = (userInput) => {
    console.log(userInput);
    setUserInput(userInput);
  };
  const yearlyData = []; 

    let currentSavings = userInput["current-savings"]; 
    const yearlyContribution = userInput["yearly-contribution"]; 
    const expectedReturn = userInput["expected-return"] / 100;
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  return (
    <div>
      <Header />
      <Form onCalculate = {calculateHandler}/>
      <Table tableData = {yearlyData} initialInvestment={userInput["current-savings"]}/>
    </div>
  );
}

export default App;

//notes:================================================
// 3 ways to type cast to number:
// const num = Number('2020'); console. log(num);
// let year = "2020"; let iyear = parseInt(year, 10); console. log(iyear);//2020.
// const pieStr = "3.14"; typeof pieStr "string" const pie = parseFloat(pieStr, 10); typeof pie "number"
