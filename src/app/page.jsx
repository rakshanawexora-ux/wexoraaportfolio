import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Introduction from '../components/portfolio/Introduction';
import WebsiteProjects from '../components/portfolio/WebsiteProjects';
import MobileApplication from '../components/portfolio/MobileApplication';
import CreativeWorks from '../components/portfolio/CreativeWorks';
import CampaignResults from '../components/portfolio/CampaignResults';
import PortfolioNotes from '../components/portfolio/PortfolioNotes';

import websiteProjects from '../data/website-projects.json';
import mobileApplication from '../data/mobile-app.json';
import creativeWorks from '../data/creative-works.json';
import campaigns from '../data/campaigns.json';
import portfolioNotes from '../data/portfolio-notes.json';

export default function HomePage() {
  return (
    <>
      <Header websiteCount={websiteProjects.length} />
      <main>
        <Introduction />
        <WebsiteProjects projects={websiteProjects} />
        <MobileApplication application={mobileApplication} number={websiteProjects.length + 1} />
        <CreativeWorks creatives={creativeWorks} />
        <CampaignResults campaigns={campaigns} />
        <PortfolioNotes notes={portfolioNotes} />
      </main>
      <Footer />
    </>
  );
}
