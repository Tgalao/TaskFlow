const navItems = [
  { label: "Dashboard", active: true },
  { label: "Tasks", active: false },
  { label: "Settings", active: false },
];

const stats = [
  { label: "Total tasks", value: "24", delta: "+12% from last week" },
  { label: "To Do", value: "9", delta: null },
  { label: "In Progress", value: "6", delta: null },
  { label: "Done", value: "7", delta: "+8% from last week" },
  { label: "Overdue", value: "2", delta: "+4% from last week" },
];

const tasks = [
  { title: "Design new landing page", priority: "High" },
  { title: "Set up Neon database", priority: "Medium" },
  { title: "Write project report", priority: "Low" },
  { title: "Fix login redirect bug", priority: "Medium" },
];

const priorityDot: Record<string, string> = {
  High: "bg-red-400",
  Medium: "bg-yellow-400",
  Low: "bg-green-400",
};

const chartPoints = "0,38 15,30 30,34 45,18 60,24 75,10 90,16 100,4";

export function HeroMockup() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden"
    >
      <div
        className="w-[1200px] max-w-none rotate-[-2deg] opacity-[0.16] dark:opacity-[0.14]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 65% at 50% 42%, black 55%, transparent 92%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 65% at 50% 42%, black 55%, transparent 92%)",
        }}
      >
        <div className="flex overflow-hidden rounded-2xl border border-gray-400 shadow-2xl dark:border-gray-500">
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
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Dashboard
              </div>
              <div className="rounded-md bg-green-500 px-3 py-1.5 text-xs font-semibold text-white">
                + New task
              </div>
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
                  {stat.delta && (
                    <div className="mt-1 text-[10px] font-medium text-green-600 dark:text-green-400">
                      {stat.delta}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-5 gap-5">
              <div className="col-span-3 rounded-lg border border-gray-300 p-4 dark:border-gray-600">
                <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Task overview
                </div>
                <svg viewBox="0 0 100 40" className="mt-4 h-24 w-full" preserveAspectRatio="none">
                  <polyline
                    points={chartPoints}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-green-500"
                  />
                </svg>
              </div>
              <div className="col-span-2 rounded-lg border border-gray-300 dark:border-gray-600">
                <div className="border-b border-gray-300 px-4 py-3 text-sm font-semibold text-gray-800 dark:border-gray-600 dark:text-gray-200">
                  Recent tasks
                </div>
                {tasks.map((task, i) => (
                  <div
                    key={task.title}
                    className={`flex items-center justify-between px-4 py-2.5 ${
                      i !== 0 ? "border-t border-gray-300 dark:border-gray-600" : ""
                    }`}
                  >
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                      {task.title}
                    </span>
                    <span className={`h-2 w-2 shrink-0 rounded-full ${priorityDot[task.priority]}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
