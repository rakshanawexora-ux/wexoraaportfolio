'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '../layout/Header';
import Introduction from './Introduction';
import WebsiteProjects from './WebsiteProjects';
import MobileApplication from './MobileApplication';
import CreativeWorks from './CreativeWorks';
import CampaignResults from './CampaignResults';

const filters = [
  { id: 'all', label: 'All projects' },
  { id: 'websites', label: 'Websites' },
  { id: 'mobile', label: 'Mobile app' },
  { id: 'social-media', label: 'Social media' },
  { id: 'campaigns', label: 'Campaigns' },
];

export default function WorkPortfolio({ projects, application, creatives, campaigns }) {
  const [filter, setFilter] = useState('all');
  const workRef = useRef(null);
  const counts = {
    websites: projects.length,
    mobile: 1,
    'social-media': creatives.projects.length,
    campaigns: campaigns.results.length,
  };
  counts.all = Object.values(counts).reduce((sum, count) => sum + count, 0);

  function selectFilter(id) {
    const top = workRef.current.getBoundingClientRect().top;
    setFilter(id);
    if (top < 80) {
      requestAnimationFrame(() =>
        workRef.current.scrollIntoView({ behavior: scrollBehavior(), block: 'start' }),
      );
    }
  }

  function scrollBehavior() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth';
  }

  function navigate(event, href) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    setFilter('all');
    window.history.pushState(null, '', href);
    requestAnimationFrame(() =>
      document.querySelector(href)?.scrollIntoView({ behavior: scrollBehavior() }),
    );
  }

  useEffect(() => {
    const handleHash = () => {
      const id = window.location.hash.slice(1);
      const target = id ? document.getElementById(id) : null;
      if (!id || (target && workRef.current.contains(target))) {
        setFilter('all');
        requestAnimationFrame(() => target?.scrollIntoView({ behavior: scrollBehavior() }));
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const scroller = workRef.current.querySelector('.project-filters');
    const activeButton = scroller.querySelector('[aria-pressed="true"]');
    const buttonBounds = activeButton.getBoundingClientRect();
    const scrollerBounds = scroller.getBoundingClientRect();
    if (buttonBounds.left < scrollerBounds.left || buttonBounds.right > scrollerBounds.right) {
      scroller.scrollTo({
        left: scroller.scrollLeft + buttonBounds.left - scrollerBounds.left - 5,
        behavior: 'instant',
      });
    }
  }, [filter]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    const elements = [
      ...workRef.current.querySelectorAll(
        '.project-preview, .project-information, .creative, .campaign, .mobile-section, .section-heading',
      ),
    ];

    function setupReveals() {
      observer?.disconnect();
      if (motion.matches) {
        elements.forEach((element) => element.classList.remove('reveal-ready'));
        return;
      }
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -24px 0px' },
      );
      for (const element of elements) {
        if (element.closest('[hidden]') || element.classList.contains('reveal-visible')) continue;
        element.classList.add('reveal-ready');
        observer.observe(element);
      }
    }

    setupReveals();
    motion.addEventListener('change', setupReveals);
    return () => {
      observer?.disconnect();
      motion.removeEventListener('change', setupReveals);
    };
  }, [filter]);

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to projects
      </a>
      <Header websiteCount={projects.length} onNavigate={navigate} />
      <div className="reading-progress" aria-hidden="true" />
      <main>
        <Introduction projects={projects} onNavigate={navigate} />
        <div id="work" className="work" ref={workRef}>
          <div className="filter-bar">
            <div className="project-filters" role="group" aria-label="Filter projects by type">
              {filters.map(({ id, label }) => (
                <button
                  type="button"
                  key={id}
                  aria-pressed={filter === id}
                  aria-controls="project-results"
                  onClick={() => selectFilter(id)}
                >
                  {label}
                  <span>{String(counts[id]).padStart(2, '0')}</span>
                </button>
              ))}
            </div>
            <span className="filter-caption" aria-live="polite">
              {String(counts[filter]).padStart(2, '0')} SELECTED WORKS
            </span>
          </div>
          <div id="project-results">
            <div hidden={filter !== 'all' && filter !== 'websites'}>
              <WebsiteProjects projects={projects} />
            </div>
            <div hidden={filter !== 'all' && filter !== 'mobile'}>
              <MobileApplication application={application} number={projects.length + 1} />
            </div>
            <div hidden={filter !== 'all' && filter !== 'social-media'}>
              <CreativeWorks creatives={creatives} />
            </div>
            <div hidden={filter !== 'all' && filter !== 'campaigns'}>
              <CampaignResults campaigns={campaigns} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
