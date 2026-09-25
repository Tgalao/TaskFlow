export default function TasksLoading() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="flex items-center justify-between">
        <div className="h-8 w-32 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-10 w-32 rounded-md bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="flex gap-3">
        <div className="h-11 flex-1 rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="h-11 w-44 rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="h-11 w-44 rounded-lg bg-gray-200 dark:bg-gray-800" />
      </div>
      <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 dark:divide-gray-800 dark:border-gray-800">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 dark:bg-gray-900" />
        ))}
      </div>
    </div>
  );
}
