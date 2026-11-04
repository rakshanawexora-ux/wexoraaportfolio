import ContentDisclosure from '../ui/ContentDisclosure';
import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';
import SectionHeading from '../ui/SectionHeading';

export default function CampaignResults({ campaigns }) {
  return (
    <section id="campaigns" className="portfolio-section campaign-section">
      <SectionHeading title="Campaign results" caption="ACTUAL CAMPAIGNS. DOCUMENTED RESULTS." />
      <ContentDisclosure className="marketing-intro" label="Our approach to digital marketing">
        <ContentBlocks blocks={campaigns.introduction} />
      </ContentDisclosure>
      <div className="campaign-grid">
        {campaigns.results.map((campaign) => (
          <article key={campaign.name} className="campaign">
            <h3>{campaign.name}</h3>
            <ImageGallery images={campaign.images} title={campaign.name} />
            <ContentDisclosure className="campaign-details" label={`${campaign.name} results`}>
              <ContentBlocks blocks={campaign.content} />
            </ContentDisclosure>
          </article>
        ))}
      </div>
    </section>
  );
}
