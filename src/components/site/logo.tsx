import Image from "next/image";

export function Logo({ size = 56, textClassName = "text-3xl" }: { size?: number; textClassName?: string }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/logo-icon.png"
        alt="TaskFlow"
        width={size}
        height={size}
        priority
      />
      <span className={`font-bold tracking-tight lowercase ${textClassName}`}>
        <span className="bg-gradient-to-r from-teal-800 to-gray-950 bg-clip-text text-transparent dark:from-teal-400 dark:to-teal-700">
          task
        </span>
        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          flow
        </span>
      </span>
    </span>
  );
}
