function iconProps() {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function UserPlusIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="9" cy="8" r="4" />
      <path d="M2 21a7 7 0 0 1 14 0" />
      <path d="M19 8v6M22 11h-6" />
    </svg>
  );
}

export function ListChecksIcon() {
  return (
    <svg {...iconProps()}>
      <path d="m3 7 2 2 3-3" />
      <path d="m3 15 2 2 3-3" />
      <path d="M11 6h10M11 16h10" />
    </svg>
  );
}

export function RefreshIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

export function SearchIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export function ChartIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M3 3v18h18" />
      <path d="M7 16v-4M12 16V8M17 16v-7" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5l-8-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
