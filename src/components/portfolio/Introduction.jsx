import { hero } from '../../data/site.json';

export default function Introduction() {
  return (
    <section className="intro">
      <div className="eyebrow">
        <span /> {hero.eyebrow}
      </div>
      <h1>
        {hero.title}
        <br />
        <em>{hero.highlight}</em>
      </h1>
      <p className="intro-description">{hero.description}</p>
      <div className="intro-actions">
        <a className="primary-link" href="#websites">
          Explore the work <span aria-hidden="true">↗</span>
        </a>
        <span>Design · Development · Digital growth</span>
      </div>
      <div className="intro-bottom">
        <span>{hero.uspTitle}</span>
        <span>{hero.uspDescription}</span>
      </div>
    </section>
  );
}
