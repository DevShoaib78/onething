// The reference's signature detail: four 5px L-shaped ticks sitting on the corners of a box.
export function Corners({ className = "", color = "rgb(255 255 255 / 0.6)" }: { className?: string; color?: string }) {
  const tick = "absolute h-[5px] w-[5px]";
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <i className={`${tick} left-0 top-0 border-l border-t`} style={{ borderColor: color }} />
      <i className={`${tick} right-0 top-0 border-r border-t`} style={{ borderColor: color }} />
      <i className={`${tick} bottom-0 left-0 border-b border-l`} style={{ borderColor: color }} />
      <i className={`${tick} bottom-0 right-0 border-b border-r`} style={{ borderColor: color }} />
    </span>
  );
}
