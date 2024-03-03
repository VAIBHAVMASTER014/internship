import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { counterActions } from "../store/Counter";
// css files
import classes from "./Counter.module.css";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);

  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  // handler function
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const incrementByCounterHandler = () => {
    dispatch(counterActions.incrementBy(Number(incrementAmount)));
  };
  const inputNumberHandler = (e) => {
    setIncrementAmount(e.target.value);
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={show ? classes.value : classes.invisible}>{counter}</div>
      <div className={classes["counter-btn"]}>
        <button disabled={!show} onClick={incrementCounterHandler}>
          +
        </button>
        <div className={classes["increment-by"]}>
          <button disabled={!show} onClick={incrementByCounterHandler}>
            Increment by
          </button>
          <input onChange={inputNumberHandler} value={incrementAmount}></input>
        </div>
        <button disabled={!show} onClick={decrementCounterHandler}>
          -
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
