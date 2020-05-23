import React, { useContext } from "react";
import ComponentY from "./ComponentY";
import { CounterContext } from "../../../App";

export default function ComponentX() {
  const countContext = useContext(CounterContext);
  console.log(countContext)
  return (
    <div>
      
      <p>Component X</p>
      {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>

      <ComponentY />
    </div>
  );
}
