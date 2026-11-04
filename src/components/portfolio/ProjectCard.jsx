import ContentBlocks from '../ui/ContentBlocks';
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
        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="visit"
          aria-label={`Visit ${project.name} website`}
        >
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="project-meta">
        <span>PROJECT {String(number).padStart(2, '0')}</span>
        <span>Website design & development</span>
      </div>
      <details className="project-details">
        <summary>
          Project overview & features <span>+</span>
        </summary>
        <ContentBlocks blocks={project.content} />
      </details>
    </article>
  );
}
