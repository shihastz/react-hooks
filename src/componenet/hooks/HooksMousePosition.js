import React, { useState, useEffect } from "react";

function HooksMousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called ");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <hr />
      <h3>Getting Mouse Position</h3>X - {x} Y - {y}
      <hr />
    </div>
  );
}

export default HooksMousePosition;
