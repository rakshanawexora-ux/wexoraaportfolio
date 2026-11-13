'use client';

import { useState } from 'react';
import { hero } from '../../data/site.json';
import ArrowIcon from '../ui/ArrowIcon';

export default function Introduction({ projects, onNavigate }) {
  const [paused, setPaused] = useState(false);
  const featured = ['tenlyr', 'exploring-munnar-crm', 'vlasy']
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project?.images.length);

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
      {featured.length > 0 && (
        <div className={`hero-reel${paused ? ' is-paused' : ''}`}>
          <div className="hero-reel-heading">
            <span>
              <span className="reel-dot" /> A FEW IDEAS, BROUGHT TO LIFE.
            </span>
            <button
              type="button"
              className="reel-motion"
              onClick={() => setPaused(!paused)}
              aria-label={paused ? 'Resume preview animation' : 'Pause preview animation'}
            >
              <svg
                viewBox="0 0 16 16"
                width="12"
                height="12"
                fill="currentColor"
                aria-hidden="true"
              >
                {paused ? <path d="m4 2 9 6-9 6Z" /> : <path d="M4 2h3v12H4zm5 0h3v12H9z" />}
              </svg>
              {paused ? 'Play motion' : 'Pause motion'}
            </button>
          </div>
          <div className="hero-reel-grid">
            {featured.map((project, index) => (
              <div className="hero-card-track" key={project.id} style={{ '--card-order': index }}>
                <a
                  className="hero-project"
                  href={`#${project.id}`}
                  onClick={(event) => onNavigate?.(event, `#${project.id}`)}
                >
                  <div className="hero-project-surface">
                    <div className="hero-browser-bar" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                      <span>{project.name}</span>
                    </div>
                    <img
                      src={project.images[0]}
                      alt={`${project.name} project preview`}
                      width="1000"
                      height="500"
                      fetchPriority={index === 0 ? 'high' : 'auto'}
                    />
                    <div className="hero-project-label">
                      <span>{project.name}</span>
                      <ArrowIcon />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          <div className="hero-reel-footer">
            <span>DESIGN. DEVELOP. MAKE A DIFFERENCE.</span>
            <a href="#work" onClick={(event) => onNavigate?.(event, '#work')}>
              Scroll to explore <ArrowIcon />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
