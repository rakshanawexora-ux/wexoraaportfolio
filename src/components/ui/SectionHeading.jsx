export default function SectionHeading({ title, count, caption }) {
  return (
    <div className="section-heading">
      <h2>
        {title} {count != null && <sup>{String(count).padStart(2, '0')}</sup>}
      </h2>
      <span>{caption}</span>
    </div>
  );
}
