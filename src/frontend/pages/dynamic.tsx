export default function DynamicPage() {

  const currentTime =
    new Date().toLocaleString();

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>{currentTime}</p>
    </div>
  );
}