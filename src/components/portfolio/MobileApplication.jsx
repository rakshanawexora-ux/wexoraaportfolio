import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';
import SectionHeading from '../ui/SectionHeading';

export default function MobileApplication({ application, number }) {
  return (
    <section id="mobile" className="portfolio-section mobile-section">
      <SectionHeading title="Mobile application" count={1} caption="PRODUCT DESIGN & DEVELOPMENT" />
      <div className="project-heading">
        <span className="number">{String(number).padStart(2, '0')}</span>
        <div>
          <span className="tag">{application.category}</span>
          <h3>{application.name}</h3>
        </div>
      </div>
      <ImageGallery images={application.images} title={application.name} mobile />
      <details className="mobile-details">
        <summary>
          Application overview & features <span>+</span>
        </summary>
        <ContentBlocks blocks={application.content} />
      </details>
    </section>
  );
}
