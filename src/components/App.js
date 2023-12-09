// Import necessary dependencies
import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

// Main App component
function App() {
  // State for storing items
  const [items, setItems] = useState([]);
  console.log(items);
  return (
    <div className="app">
      <Logo />
      <Form setItems={setItems} />
      <PackagingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}
export default App;
