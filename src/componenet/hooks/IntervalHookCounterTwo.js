import React, { useState, useEffect, useRef } from "react";

function IntervalHookCounterTwo() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  const tick = () => {
    setCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    console.log("useeffect called");
    intervalRef.current = setInterval(tick, 1000);
    return () => {
      console.log("umount");
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <div>
      <hr />
      <h3>Automatic Counter with pause button (using useRef)</h3>
      <h5>{count}</h5>
      <button
        type="btn btn-warning"
        onClick={() => clearInterval(intervalRef.current)}
      >
        Pause
      </button>
      <button type="btn btn-primary" onClick={() => setInterval(tick, 1000)}>
        Resume
      </button>
      <button type="btn btn-primary" onClick={() => setCount(0)}>
        Reset
      </button>
      <hr />
    </div>
  );
}

export default IntervalHookCounterTwo;
