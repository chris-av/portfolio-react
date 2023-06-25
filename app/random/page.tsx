export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await response.json();
  return (
    <div>
      <span>Todo:</span>
      <span>{todo.title}</span>
    </div>
  );
}
