import ContentDisclosure from '../ui/ContentDisclosure';
import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';
import SectionHeading from '../ui/SectionHeading';

export default function CreativeWorks({ creatives }) {
  return (
    <section id="creatives" className="portfolio-section">
      <SectionHeading
        title="Creative works"
        count={creatives.projects.length}
        caption="SOCIAL MEDIA & BRAND CONTENT"
      />
      <ContentDisclosure className="creative-introduction" label="Behind the creative work">
        <ContentBlocks blocks={creatives.introduction} />
      </ContentDisclosure>
      <div className="creative-grid">
        {creatives.projects.map((project, index) => (
          <article className="creative" key={project.name}>
            <div className="creative-heading">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.name}</h3>
            </div>
            <ImageGallery images={project.images} title={project.name} />
          </article>
        ))}
      </div>
    </section>
  );
}
