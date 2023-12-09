import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Form({ setItems }) {
  const options = Array.from({ length: 20 }, (_, i) => i + 1);
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();

    // if description is empty = return
    if (!description.trim()) return;
    const newItem = { description, quantity, packed: false, id: uuidv4() };
    setItems((pervItems) => [...pervItems, newItem]);
    setDescription("");
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD+</button>
    </form>
  );
}
