export default function ArrowIcon({ className = '' }) {
  return (
    <svg
      className={`arrow-icon ${className}`}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M5 5h14v14" />
    </svg>
  );
}
