export default function HeavyPage() {

  const items =
    Array.from(
      { length: 1000 },
      (_, index) => (
        <li key={index}>
          Item {index}
        </li>
      )
    );

  return (
    <div>
      <h1>Heavy Content Page</h1>
      <ul>{items}</ul>
    </div>
  );
}