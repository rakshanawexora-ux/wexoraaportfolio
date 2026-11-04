import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';
import SectionHeading from '../ui/SectionHeading';

export default function CampaignResults({ campaigns }) {
  return (
    <section id="campaigns" className="portfolio-section campaign-section">
      <SectionHeading title="Campaign results" caption="ACTUAL CAMPAIGNS. DOCUMENTED RESULTS." />
      <details className="marketing-intro">
        <summary>
          Our approach to digital marketing <span>+</span>
        </summary>
        <ContentBlocks blocks={campaigns.introduction} />
      </details>
      <div className="campaign-grid">
        {campaigns.results.map((campaign) => (
          <article key={campaign.name} className="campaign">
            <h3>{campaign.name}</h3>
            <ImageGallery images={campaign.images} title={campaign.name} />
            <details className="campaign-details">
              <summary>
                Campaign details <span>+</span>
              </summary>
              <ContentBlocks blocks={campaign.content} />
            </details>
          </article>
        ))}
      </div>
    </section>
  );
}
