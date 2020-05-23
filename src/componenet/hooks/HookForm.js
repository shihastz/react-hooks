import React, { useState } from "react";

function HookForm() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <hr />
      <h2>Form (usestate with object)</h2>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h4>First Name is - {name.firstName}</h4>
      <h4>Last Name is - {name.lastName}</h4>
      <h5>{JSON.stringify(name)}</h5>
      <hr />
    </div>
  );
}

export default HookForm;
