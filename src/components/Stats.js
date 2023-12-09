export default function Stats({ items }) {
  const total = items.length;

  if (!total)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / total) * 100);

  return (
    <footer className="stats">
      <em>
        You have ({total}) {total <= 1 ? "item" : "items"} on your list, and you
        already packed ({packed}) {packed <= 1 ? "item" : "items"} ({percentage}
        %)
      </em>
    </footer>
  );
}
