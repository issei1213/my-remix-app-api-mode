import type { MetaFunction } from "@remix-run/node";
import {Link, useLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "TODO | 一覧" },
    { name: "description", content: "TODO一覧ページ" },
  ];
};

export const clientLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todoList = await response.json();

  return { todoList };
}

export default function TodoList() {
   const { todoList } = useLoaderData<typeof clientLoader>()

  return (
    <div>
      <h1>TODO一覧ページ</h1>
      <ul>
        {
          todoList.map((todo: any) => (
              <li key={todo.id}>
                <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              </li>
          ))
        }
      </ul>
    </div>
  );
}
``