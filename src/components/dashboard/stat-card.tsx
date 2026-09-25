export function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
      <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
      <p className="mt-1 text-3xl font-bold text-gray-900 dark:text-gray-100">{value}</p>
    </div>
  );
}
