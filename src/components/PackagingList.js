import React, { useState } from "react";
import Item from "./Item";

export default function PackagingList({ items, setItems }) {
  //Sorting items by diffrent options
  const [sortBy, setSortyBy] = useState("input");
  let sortedItems;
  function handleClearList() {
    const confirm = window.confirm("Are you sure you want to clear your list?");
    if (confirm) setItems([]);
  }

  switch (sortBy) {
    case "input":
      sortedItems = items;
      break;
    case "description":
      sortedItems = items.toSorted((a, b) =>
        a.description.localeCompare(b.description)
      );
      break;
    case "packed":
      sortedItems = [...items].sort(
        (a, b) => Number(a.packed) - Number(b.packed)
      );
      break;
    case "number":
      sortedItems = [...items.sort((a, b) => a.quantity - b.quantity)];
      break;
    default:
  }

  //items list
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} setItems={setItems} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortyBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
          <option value="number">sort by number of items</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
