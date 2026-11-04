import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';

export default function ProjectCard({ project, number }) {
  return (
    <article className="project" id={project.id}>
      <div className="project-heading">
        <span className="number">{String(number).padStart(2, '0')}</span>
        <div>
          <span className="tag">{project.category}</span>
          <h3>{project.name}</h3>
        </div>
        <a href={project.websiteUrl} target="_blank" rel="noreferrer" className="visit">
          Visit website <span>↗</span>
        </a>
      </div>
      <ImageGallery images={project.images} title={project.name} />
      <div className="project-details">
        <span className="detail-label">ABOUT THE PROJECT</span>
        <ContentBlocks blocks={project.content} />
      </div>
    </article>
  );
}
