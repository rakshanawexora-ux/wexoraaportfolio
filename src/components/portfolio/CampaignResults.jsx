import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';
import SectionHeading from '../ui/SectionHeading';

export default function CampaignResults({ campaigns }) {
  return (
    <section id="campaigns" className="portfolio-section campaign-section">
      <SectionHeading title="Campaign results" caption="ACTUAL CAMPAIGNS. DOCUMENTED RESULTS." />
      <div className="marketing-intro">
        <h3>Digital Marketing &amp; Advertising</h3>
        <ContentBlocks blocks={campaigns.introduction} />
      </div>
      {campaigns.results.map((campaign) => (
        <article key={campaign.name} className="campaign">
          <h3>{campaign.name}</h3>
          <ImageGallery images={campaign.images} title={campaign.name} />
          <ContentBlocks blocks={campaign.content} />
        </article>
      ))}
    </section>
  );
}
