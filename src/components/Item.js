import React from "react";

// Single item component
export default function Item({ item, setItems }) {
  // Handle item packing
  function handlePacked() {
    setItems((pervItems) =>
      pervItems.map((i) => (i.id === item.id ? { ...i, packed: !i.packed } : i))
    );
  }
  // Handle item removal
  function handleRemove() {
    setItems((pervItems) => pervItems.filter((i) => i.id !== item.id));
  }
  return (
    <li>
      <input type="checkbox" onChange={handlePacked} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}-{item.description}
      </span>
      <button onClick={handleRemove}>❌</button>
    </li>
  );
}
