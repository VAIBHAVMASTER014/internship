import React ,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementBy } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [incrementAmount,setIncrementAmount] = useState(0)
  const addValue = Number(incrementAmount) || 0;

  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  }
  return (
    <section>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <input type="text" value = {incrementAmount} onChange={(e)=>setIncrementAmount(e.target.value)}></input>
      <div>
        <button onClick={() => dispatch(incrementBy(addValue))}>Increment by {addValue}</button>
        
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
