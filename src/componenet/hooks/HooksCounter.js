import React, { useState } from "react";

function HooksCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <hr />
      <h2>Counter Using React Hooks (useState)</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
      <hr />
    </div>
  );
}

export default HooksCounter;
