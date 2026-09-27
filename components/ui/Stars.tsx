export function Stars({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`flex gap-1 text-accent ${className}`} role="img" aria-label="Five stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden>
          <path d="M8 .8l2.1 4.6 5 .6-3.7 3.4 1 5-4.4-2.5-4.4 2.5 1-5L.9 6l5-.6z" />
        </svg>
      ))}
    </span>
  );
}
