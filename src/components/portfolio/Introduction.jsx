import { hero } from '../../data/site.json';

export default function Introduction() {
  return (
    <section className="intro">
      <div className="eyebrow">
        <span /> {hero.eyebrow}
      </div>
      <div className="intro-row">
        <h1>
          {hero.title}
          <br />
          <em>{hero.highlight}</em>
        </h1>
        <div className="usp">
          <span className="tag">{hero.uspLabel}</span>
          <h2>{hero.uspTitle}</h2>
          <p>{hero.uspDescription}</p>
        </div>
      </div>
      <div className="intro-bottom">
        <span>THE PORTFOLIO</span>
        <span>WEBSITES · APPS · CREATIVES · CAMPAIGNS ↓</span>
      </div>
    </section>
  );
}
