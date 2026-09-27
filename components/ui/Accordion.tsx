// Plus that turns into an orange minus when open.
export function PlusMinus({ open }: { open: boolean }) {
  return (
    <span className="relative block h-[14px] w-[14px] shrink-0" aria-hidden>
      <span className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 transition-colors duration-300 ${open ? "bg-accent" : "bg-white"}`} />
      <span
        className={`absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white transition-all duration-500 ease-out-expo ${open ? "rotate-90 opacity-0" : ""}`}
      />
    </span>
  );
}

// Height animation done with a grid row going from 0fr to 1fr. The content always stays in the
// HTML, so search engines and answer engines can read collapsed answers too.
export function Collapse({ open, id, children }: { open: boolean; id?: string; children: React.ReactNode }) {
  return (
    <div
      id={id}
      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
    >
      <div className="min-h-0 overflow-hidden">{children}</div>
    </div>
  );
}
