import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0
  const [count, setCount] = useState(initialCount)
  const incrementFive = () => {
      for (let i = 0; i < 5; i++) {
        setCount(prevCount => prevCount+1)
          
      }
  }
  return (
    <div>
      <hr />
      <h2>Counter with Increment, Decrement and Reset</h2>
      <h3>Counts : {count}</h3>
      <button onClick={() => setCount(prevCount => prevCount+1 )}>Increment</button>
      <button onClick={() => setCount((prevCount) => prevCount-1 )}>Decrement</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={incrementFive}>Increment By 5</button>
      <hr />
    </div>
  );
}

export default HookCounterTwo;
