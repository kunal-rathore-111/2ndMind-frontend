import Layout from "./Layout";

export default function App() {
  return (
    <div className="flex w-full flex-col items-center text-zinc-700 dark:text-zinc-300">
      <div className="sm:max-w-3xl lg:max-w-7xl">
        <Layout></Layout>
      </div>
    </div>
  );
}
