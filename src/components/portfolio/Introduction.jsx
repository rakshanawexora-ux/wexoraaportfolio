import { hero } from '../../data/site.json';
import projects from '../../data/projects.json';

export default function Introduction() {
  return (
    <section className="intro">
      <div className="intro-copy">
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
      </div>
      <a
        className="intro-showcase"
        href="#websites"
        aria-label="Explore our selected website projects"
      >
        <div className="showcase-top">
          <span>
            <i /> Selected work
          </span>
          <span>WEXORAA / PORTFOLIO</span>
        </div>
        <div className="showcase-images">
          <img
            className="showcase-main"
            src="/images/websites/tenlyr-home.png"
            alt="Tenlyr website designed by Wexoraa"
          />
          <img
            className="showcase-overlap"
            src="/images/websites/vlasy-home.png"
            alt="Vlasy salon website designed by Wexoraa"
          />
        </div>
        <div className="showcase-bottom">
          <span>Ideas, brought to life.</span>
          <span aria-hidden="true">↗</span>
        </div>
      </a>
      <div className="intro-bottom">
        <span>
          <strong>{String(projects.length).padStart(2, '0')}</strong> Website projects
        </span>
        <span>{hero.uspTitle}</span>
        <span>{hero.uspDescription}</span>
      </div>
    </section>
  );
}
