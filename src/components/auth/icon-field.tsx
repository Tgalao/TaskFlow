import type { ReactNode, InputHTMLAttributes } from "react";

type IconFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
  label: string;
};

export function IconField({ icon, label, id, ...props }: IconFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <div className="group relative">
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400 transition-colors group-focus-within:text-gray-900 dark:text-gray-500 dark:group-focus-within:text-white">
          {icon}
        </span>
        <input
          id={id}
          {...props}
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-3 text-sm text-gray-900 outline-none transition-all focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:focus:border-white dark:focus:ring-white/10"
        />
      </div>
    </div>
  );
}
