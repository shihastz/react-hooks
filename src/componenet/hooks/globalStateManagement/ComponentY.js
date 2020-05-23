import React, { useContext } from "react";
import ComponentZ from "./ComponentZ";
import { CounterContext } from "../../../App";

export default function ComponentY() {
  const countContext = useContext(CounterContext);
  //console.log(countContext)
  return (
    <div>
      <p>Component Y</p>
      {countContext.countState}
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>

      <ComponentZ />
    </div>
  );
}
