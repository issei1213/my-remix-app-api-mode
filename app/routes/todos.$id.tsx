import type { MetaFunction } from "@remix-run/node";
import {ClientLoaderFunctionArgs, Link, useLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "TODO | 詳細" },
    { name: "description", content: "TODO詳細ページ" },
  ];
};

export const clientLoader = async({params}: ClientLoaderFunctionArgs) => {
    const { id } = params
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await response.json();

    return { todo };
}

export default function TodoDetail() {
  const {todo} = useLoaderData<typeof clientLoader>()

  return (
    <div>
      <h1>TODO詳細ページ</h1>
      <dl>
        <dt>ユーザID</dt>
        <dd>{todo.userId}</dd>
        <dt>ID</dt>
        <dd>{todo.id}</dd>
        <dt>タイトル</dt>
        <dd>{todo.title}</dd>
        <dt>完了</dt>
        <dd>{todo.completed ? "完了" : "未完了"}</dd>
      </dl>
      <Link to="/todos">一覧に戻る</Link>
    </div>
  );
}
``