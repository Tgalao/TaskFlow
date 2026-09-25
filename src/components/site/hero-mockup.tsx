const navItems = [
  { label: "Dashboard", active: true },
  { label: "Tasks", active: false },
  { label: "Settings", active: false },
];

const stats = [
  { label: "Total tasks", value: "24" },
  { label: "To Do", value: "9" },
  { label: "In Progress", value: "6" },
  { label: "Done", value: "7" },
  { label: "Overdue", value: "2" },
];

const tasks = [
  { title: "Design new landing page", priority: "High" },
  { title: "Set up Neon database", priority: "Medium" },
  { title: "Write project report", priority: "Low" },
];

const priorityDot: Record<string, string> = {
  High: "bg-red-400",
  Medium: "bg-yellow-400",
  Low: "bg-green-400",
};

export function HeroMockup() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
    >
      <div
        className="w-[1100px] max-w-none opacity-[0.05] dark:opacity-[0.06]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 45%, black 35%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 45%, black 35%, transparent 75%)",
        }}
      >
        <div className="flex overflow-hidden rounded-2xl border border-gray-400 dark:border-gray-500">
          <aside className="w-48 shrink-0 border-r border-gray-400 bg-white p-4 dark:border-gray-500 dark:bg-black">
            <div className="mb-6 text-xl font-bold lowercase">
              <span className="text-teal-800 dark:text-teal-400">task</span>
              <span className="text-green-500">flow</span>
            </div>
            <nav className="space-y-1">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    item.active
                      ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </nav>
          </aside>

          <div className="flex-1 bg-white p-6 dark:bg-black">
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Dashboard
            </div>
            <div className="mt-5 grid grid-cols-5 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-gray-300 p-3 dark:border-gray-600"
                >
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                  <div className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg border border-gray-300 dark:border-gray-600">
              {tasks.map((task, i) => (
                <div
                  key={task.title}
                  className={`flex items-center justify-between px-4 py-3 ${
                    i !== 0 ? "border-t border-gray-300 dark:border-gray-600" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                    {task.title}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                    <span className={`h-2 w-2 rounded-full ${priorityDot[task.priority]}`} />
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
