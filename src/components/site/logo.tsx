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
      <span className={`font-bold tracking-tight ${textClassName}`}>
        <span className="bg-gradient-to-r from-gray-900 to-emerald-900 bg-clip-text text-transparent dark:from-gray-100 dark:to-emerald-200">
          Task
        </span>
        <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
          Flow
        </span>
      </span>
    </span>
  );
}
