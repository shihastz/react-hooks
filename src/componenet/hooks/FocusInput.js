import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <hr />
      <h3>Focusing input after page load using useRef</h3>
      <input type="text" ref={inputRef} />
      <hr />
    </div>
  );
}

export default FocusInput;
