/** Render editable paragraphs and feature lists from src/data/*.json. */
export default function ContentBlocks({ blocks }) {
  return (
    <div className="copy">
      {blocks.map((block, index) => {
        if (block.type === 'list') {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={index}>{block.text}</p>;
      })}
    </div>
  );
}
