import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix SPA" },
    { name: "description", content: "Welcome to Remix (SPA Mode)!" },
  ];
};

const test = "test"

export default function Index() {
  return (
    <div>
      <h1>TODO新規作成ページ</h1>
    </div>
  );
}
``