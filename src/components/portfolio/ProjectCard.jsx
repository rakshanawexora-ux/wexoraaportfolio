import ContentDisclosure from '../ui/ContentDisclosure';
import ImageGallery from '../ui/ImageGallery';

export default function ProjectCard({ project, number }) {
  return (
    <article className="project" id={project.id}>
      <div className="project-preview">
        <ImageGallery images={project.images} title={project.name} />
      </div>
      <div className="project-heading">
        <div>
          <span className="tag">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
      </div>
      <div className="project-meta">
        <span>PROJECT {String(number).padStart(2, '0')}</span>
        <span>Website design & development</span>
      </div>
      <a
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="visit"
        aria-label={`Visit ${project.name} website`}
      >
        <span className="visit-url">{new URL(project.websiteUrl).hostname}</span>
        <span className="visit-action">
          Visit website <span aria-hidden="true">↗</span>
        </span>
      </a>
      <ContentDisclosure className="project-details" label={`${project.name} overview & features`}>
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
        </div>
      </ContentDisclosure>
    </article>
  );
}
