import CaseStudy from './CaseStudy';
import ContentDisclosure from '../ui/ContentDisclosure';
import ImageGallery from '../ui/ImageGallery';
import ArrowIcon from '../ui/ArrowIcon';

export default function ProjectCard({ project, number }) {
  const isDashboard = project.id.endsWith('-crm');

  return (
    <article className="project" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="project-preview">
        <span className="preview-label">WEXORAA / {String(number).padStart(2, '0')}</span>
        {project.images.length > 0 ? (
          <ImageGallery images={project.images} title={project.name} />
        ) : (
          <div className={`project-brand-cover ${project.coverStyle || ''}`}>
            <span>{project.name}</span>
            <p>{project.coverTitle || project.category}</p>
            <ArrowIcon />
          </div>
        )}
        <span className="preview-hint">
          {project.images.length ? 'CLICK AN IMAGE TO EXPLORE' : 'DESIGNED & DEVELOPED IN-HOUSE'}
        </span>
      </div>
      <div className="project-information">
        <p className="project-services">
          {isDashboard
            ? '#CRM SOFTWARE  #ADMIN DASHBOARD'
            : '#WEBSITE DESIGN  #WEBSITE DEVELOPMENT'}
        </p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-summary">{project.description[0]}</p>
        <div className="project-tags">
          <span>{project.category}</span>
          <span>
            {isDashboard
              ? 'CRM & dashboard'
              : project.caseStudy
                ? 'Platform architecture'
                : 'Design & development'}
          </span>
        </div>
        {project.features.length > 0 && (
          <div className="project-highlights">
            <p>PROJECT HIGHLIGHTS</p>
            <ul>
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="project-link-row">
          {project.websiteUrl && (
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit"
              aria-label={`Visit ${project.name} website`}
            >
              Visit website <ArrowIcon />
            </a>
          )}
          <span className="project-index">PROJECT / {String(number).padStart(2, '0')}</span>
        </div>
        <ContentDisclosure
          className="project-details"
          label={`${project.name} ${project.caseStudy ? 'case study' : 'overview & features'}`}
        >
          <div className="copy">
            {project.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.features.length > 0 && (
              <>
                <p>{project.featuresTitle}</p>
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
            {project.caseStudy && <CaseStudy sections={project.caseStudy} />}
          </div>
        </ContentDisclosure>
      </div>
    </article>
  );
}
