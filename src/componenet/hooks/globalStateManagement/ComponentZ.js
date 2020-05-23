import React, { useContext } from "react";
import { CounterContext } from "../../../App";

export default function ComponentZ() {
  const countContext = useContext(CounterContext);
  console.log(countContext)
  return (
    <div>
      <p>Component Z</p>
      {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>

    </div>
  );
}
