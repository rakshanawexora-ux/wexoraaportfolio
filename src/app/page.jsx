import Footer from '../components/layout/Footer';
import WorkPortfolio from '../components/portfolio/WorkPortfolio';

import websiteProjects from '../data/projects.json';
import mobileApplication from '../data/mobile-app.json';
import creativeWorks from '../data/creative-works.json';
import campaigns from '../data/campaigns.json';

export default function HomePage() {
  return (
    <>
      <WorkPortfolio
        projects={websiteProjects}
        application={mobileApplication}
        creatives={creativeWorks}
        campaigns={campaigns}
      />
      <Footer />
    </>
  );
}
