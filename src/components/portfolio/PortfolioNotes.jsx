import ContentBlocks from '../ui/ContentBlocks';

export default function PortfolioNotes({ notes }) {
  return (
    <section className="source-notes" aria-label="Original portfolio notes">
      <details>
        <summary>
          About Wexoraa — from our original portfolio <span>+</span>
        </summary>
        <ContentBlocks blocks={notes.about} />
        <p className="source-note">{notes.sourceNote}</p>
      </details>
      <details>
        <summary>
          Our services &amp; a note from our founder <span>+</span>
        </summary>
        <ContentBlocks blocks={notes.servicesAndClosing} />
      </details>
    </section>
  );
}
