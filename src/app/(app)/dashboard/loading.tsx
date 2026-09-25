export default function DashboardLoading() {
  return (
    <div className="animate-pulse space-y-8">
      <div>
        <div className="h-8 w-48 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="mt-2 h-4 w-64 rounded bg-gray-200 dark:bg-gray-800" />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-24 rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900"
          />
        ))}
      </div>

      <div>
        <div className="mb-3 h-6 w-40 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-40 rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-gray-900" />
      </div>
    </div>
  );
}
