import ContentDisclosure from '../ui/ContentDisclosure';
import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';

export default function CampaignResults({ campaigns }) {
  return (
    <section id="campaigns" className="portfolio-section campaign-section">
      <div className="campaign-introduction">
        <p className="eyebrow">CREATIVE THINKING. STRATEGIC REACH.</p>
        <h2>
          Beyond Visibility.
          <br />
          <em>Into Possibility.</em>
        </h2>
        <p>{campaigns.subtext}</p>
      </div>
      <div className="campaign-grid">
        {campaigns.results.map((campaign, index) => (
          <article
            key={campaign.name}
            className="campaign"
            aria-labelledby={`campaign-${index}-title`}
          >
            <div className="campaign-channel">
              <p className="campaign-kicker">
                {String(index + 1).padStart(2, '0')} / {campaign.discipline}
              </p>
              <h3 id={`campaign-${index}-title`}>{campaign.name}</h3>
              <span className="campaign-platforms">{campaign.platforms}</span>
            </div>
            <div className="campaign-story">
              <h4>{campaign.headline}</h4>
              <p className="campaign-description">{campaign.description}</p>
              <ContentDisclosure
                className="campaign-details"
                label={
                  campaign.images.length
                    ? `View ${campaign.name} campaign results`
                    : 'Explore our social media approach'
                }
              >
                {campaign.images.length > 0 && (
                  <ImageGallery images={campaign.images} title={campaign.name} />
                )}
                <ContentBlocks blocks={campaign.content} />
              </ContentDisclosure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
