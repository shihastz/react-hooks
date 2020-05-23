import React, { useState } from "react";

function HooksList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 9000) + 1000,
      },
    ]);
  };

  return (
    <div>
      <hr />
      <h3>Adding Random 4 digit Number to the list (useState with array)</h3>
      <button onClick={addItem}> Add Number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default HooksList;
