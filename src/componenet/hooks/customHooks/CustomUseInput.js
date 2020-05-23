import React from "react";
import useInput from "./useInput";

function CustomUseInput() {
  const [firstName, bindFirstname, resetFirstname] = useInput("");
  const [lastName, bindLastname, resetLastname] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hi ${firstName} ${lastName}`);

    resetFirstname();
    resetLastname();
  };
  return (
    <div>
      <hr />
      <h3>Custom Form using useInput custom hook</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input type="text" {...bindFirstname} />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" {...bindLastname} />
        </div>
        <div>
          <button type="button" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CustomUseInput;
