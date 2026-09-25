import Image from "next/image";

export function Logo({
  size = 56,
  textClassName = "text-3xl",
  imgClassName = "",
}: {
  size?: number;
  textClassName?: string;
  imgClassName?: string;
}) {
  return (
    <span className="flex items-center gap-2 sm:gap-3">
      <Image
        src="/logo-icon.png"
        alt="TaskFlow"
        width={size}
        height={size}
        priority
        className={`shrink-0 ${imgClassName}`}
      />
      <span className={`font-extrabold tracking-tight lowercase ${textClassName}`}>
        <span className="text-[#07585c] dark:text-[#3ddc9a]">task</span>
        <span className="text-[#00c96b]">flow</span>
      </span>
    </span>
  );
}
