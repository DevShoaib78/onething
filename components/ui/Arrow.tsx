// Thin arrow pointing up-right; rotate it for other directions.
export function Arrow({ className = "", size = 12 }: { className?: string; size?: number }) {
  return (
    <svg aria-hidden width={size} height={size} viewBox="0 0 12 12" fill="none" className={className}>
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
    </svg>
  );
}

// Up-right arrow that exits to the top-right on hover while a twin slides in from the bottom-left.
// Needs a parent with the `group` class.
export function SwapArrow({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`relative inline-block overflow-hidden ${className}`} style={{ width: size + 4, height: size + 4 }}>
      <span className="absolute inset-0 grid place-items-center transition-transform duration-500 ease-out-expo group-hover:-translate-y-full group-hover:translate-x-full">
        <Arrow size={size} />
      </span>
      <span className="absolute inset-0 grid -translate-x-full translate-y-full place-items-center transition-transform duration-500 ease-out-expo group-hover:translate-x-0 group-hover:translate-y-0">
        <Arrow size={size} />
      </span>
    </span>
  );
}
