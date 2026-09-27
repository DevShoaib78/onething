// Text that rolls up to a copy of itself when the parent `group` is hovered.
// The copy is drawn by CSS (::after from data-text), so each word exists once in the HTML
// and search engines never read labels twice.
export function RollText({ children, className = "" }: { children: string; className?: string }) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <span
        data-text={children}
        className="roll relative block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full"
      >
        {children}
      </span>
    </span>
  );
}

// Letter-by-letter roll with a small stagger, used for footer links. Same CSS copy trick per letter.
export function RollLetters({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex overflow-hidden ${className}`}>
      <span className="sr-only">{text}</span>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          aria-hidden
          data-text={ch === " " ? " " : ch}
          className="roll roll-accent relative inline-block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full"
          style={{ transitionDelay: `${i * 18}ms` }}
        >
          {ch === " " ? " " : ch}
        </span>
      ))}
    </span>
  );
}
