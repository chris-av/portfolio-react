export default async function Page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await response.json();
  console.log({ todo });
  return (
    <div>
      <span>Todo:</span>
      <span>{todo[0].title}</span>
    </div>
  );
}
