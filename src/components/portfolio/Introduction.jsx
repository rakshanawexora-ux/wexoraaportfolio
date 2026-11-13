import { hero } from '../../data/site.json';
import ArrowIcon from '../ui/ArrowIcon';

export default function Introduction() {
  return (
    <section className="intro" aria-labelledby="work-title">
      <p className="eyebrow">
        <span /> {hero.eyebrow}
      </p>
      <h1 id="work-title">
        Explore our <em>projects.</em>
      </h1>
      <div className="intro-bottom">
        <p>{hero.description}</p>
        <span>
          {hero.uspDescription} <ArrowIcon className="intro-arrow" />
        </span>
      </div>
    </section>
  );
}
