import ContentDisclosure from '../ui/ContentDisclosure';
import ContentBlocks from '../ui/ContentBlocks';
import ImageGallery from '../ui/ImageGallery';

export default function CampaignResults({ campaigns }) {
  return (
    <section id="campaigns" className="portfolio-section campaign-section" aria-label="Campaigns">
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
              {campaign.images.length > 0 && (
                <div className="campaign-evidence">
                  <p className="campaign-kicker">CAMPAIGN RESULTS · CLICK TO ENLARGE</p>
                  <ImageGallery images={campaign.images} title={campaign.name} />
                </div>
              )}
              <ContentDisclosure
                className="campaign-details"
                label={
                  campaign.images.length
                    ? `Read ${campaign.name} campaign details`
                    : 'Explore our social media approach'
                }
              >
                <ContentBlocks blocks={campaign.content} />
              </ContentDisclosure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
