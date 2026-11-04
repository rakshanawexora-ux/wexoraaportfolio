/** Click or press Enter/Space to reveal the complete original content. */
export default function ContentDisclosure({ children, label, className = '' }) {
  return (
    <details className={`content-disclosure ${className}`}>
      <summary>
        <span className="disclosure-label">{label}</span>
        <span className="disclosure-action" aria-hidden="true">
          <span className="when-closed">View details</span>
          <span className="when-open">Hide details</span>
          <span className="disclosure-icon">+</span>
        </span>
      </summary>
      <div className="disclosure-body">{children}</div>
    </details>
  );
}
