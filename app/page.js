import pages from '../public/assets/document.json';
import Gallery from './gallery';
const allImages = pages.flatMap(p=>p.images);
const asset = id => '/'+allImages.find(p=>p.includes(`image-${id}.`));
const text = pages.map(p=>p.text).join('\n\n');
const definitions = [
 ['Exploring Munnar','Travel & tourism','https://www.exploringmunnar.com/',[28,29,37]],
 ['VPS Infra Associates','Construction & infrastructure','https://vpsinfraassociates.com/',[41]],
 ['Intercity Riders','Taxi booking platform','https://intercityonewaytaxi.in/',[45]],
 ['Covai Home Tech','Home appliance services','https://covaihometech.in/',[49]],
 ['Gym Hack','Fitness e-commerce','https://gymhack.in/',[53,56]],
 ['Purple Drop Taxi','Travel & mobility','https://purpledroptaxi.com/',[57]],
 ['Taerg Laundry','Premium garment care','https://taerglaundry.com/',[61,65]]
];
function projectText(index){const name=definitions[index][0];const start=text.indexOf(name);const end=index<6?text.indexOf(definitions[index+1][0],start+name.length):text.indexOf('These projects reflect',start);return text.slice(start+name.length,end).replace(/👇/g,'').replace(/https:\/\/[^\s]+/g,'').trim();}
function Copy({text}){return <div className="copy">{text.trim().split(/\n\s*\n/).filter(Boolean).map((p,i)=><p key={i}>{p.replace(/\n/g,' ')}</p>)}</div>;}
const creativeNames=['Hita Home Décor','Covaihometech','Ayyappa Ghee','Intercity Riders','Taerg Laundry','Kinza Organics','Exploring Munnar','KR Fruits&Vegetables'];
export default function Home(){return <>
 <header><a className="brand" href="#"><img src={asset(18)} alt="Wexoraa original logo"/><span>wexoraa<small>INFOTECH</small></span></a><nav aria-label="Portfolio navigation"><a href="#websites">Websites <sup>07</sup></a><a href="#mobile">Mobile app</a><a href="#creatives">Creatives</a><a href="#campaigns">Campaigns</a></nav><a className="pdf-link" href="/assets/Wexoraa-portfolio.pdf" target="_blank" rel="noreferrer">Portfolio PDF ↗</a></header>
 <main><section className="intro"><div className="eyebrow"><span/> WEXORAA INFOTECH / SELECTED WORK</div><div className="intro-row"><h1>Our work.<br/><em>Your next possibility.</em></h1><p>Websites, mobile experiences, and creative work.<br/>Designed and developed by our own team.</p></div><div className="intro-bottom"><span>THE PORTFOLIO</span><span>WEBSITES · APPS · CREATIVES · CAMPAIGNS ↓</span></div></section>
 <section id="websites" className="website-section"><div className="section-heading"><h2>Website projects <sup>07</sup></h2><span>LIVE PROJECTS / ORIGINAL SCREENSHOTS</span></div>
 {definitions.map(([name,tag,url,ids],i)=><article className="project" key={name}><div className="project-heading"><span className="number">{String(i+1).padStart(2,'0')}</span><div><span className="tag">{tag}</span><h3>{name}</h3></div><a href={url} target="_blank" rel="noreferrer" className="visit">Visit website <span>↗</span></a></div><Gallery images={ids.map(asset)} title={name}/><div className="project-details"><span className="detail-label">ABOUT THE PROJECT</span><Copy text={projectText(i)}/></div></article>)}
 </section>
 <section id="mobile" className="portfolio-section mobile-section"><div className="section-heading"><h2>Mobile application <sup>01</sup></h2><span>PRODUCT DESIGN & DEVELOPMENT</span></div><div className="project-heading"><span className="number">08</span><div><span className="tag">Real-time communication</span><h3>Chat Application</h3></div></div><Gallery images={[68,69,72,73].map(asset)} title="Chat Application" mobile/><div className="project-details"><span className="detail-label">ABOUT THE APPLICATION</span><Copy text={text.slice(text.indexOf('Mobile App Development'),text.indexOf('Social Media & Creative Works'))}/></div></section>
 <section id="creatives" className="portfolio-section"><div className="section-heading"><h2>Creative works <sup>08</sup></h2><span>SOCIAL MEDIA & BRAND CONTENT</span></div><Copy text={text.slice(text.indexOf('Social Media & Creative Works'),text.indexOf('Hita Home Décor'))}/><div className="creative-grid">{[78,79,82,83,86,87,90,91].map((id,i)=><article className="creative" key={id}><div className="creative-heading"><span>{String(i+1).padStart(2,'0')}</span><h3>{creativeNames[i]}</h3></div><Gallery images={[asset(id)]} title={creativeNames[i]}/></article>)}</div></section>
 <section id="campaigns" className="portfolio-section campaign-section"><div className="section-heading"><h2>Campaign results</h2><span>ACTUAL CAMPAIGNS. DOCUMENTED RESULTS.</span></div>
 {[
 ['Social Media Performance',[96],text.slice(text.indexOf('Digital Marketing & Advertising'),text.indexOf('Meta Ads\nHere Are'))],
 ['Meta Ads',[101,104],text.slice(text.indexOf('Meta Ads\nHere Are'),text.indexOf('Google Ads\n',text.indexOf('Meta Ads\nHere Are')))],
 ['Google Ads',[107,108,111,112],text.slice(text.indexOf('Google Ads\n',text.indexOf('Meta Ads\nHere Are')),text.indexOf('Our Services & Results'))]
 ].map(([name,ids,copy])=><article key={name} className="campaign"><h3>{name}</h3><Gallery images={ids.map(asset)} title={name}/><Copy text={copy}/></article>)}
 </section></main><footer><a className="brand" href="#"><img src={asset(18)} alt="Wexoraa logo"/><span>wexoraa<small>INFOTECH</small></span></a><div>Kesavardhan.U<span>Founder & CEO · Wexoraa Infotech</span></div><a href="/assets/Wexoraa-portfolio.pdf" download>Download original portfolio ↗</a><a href="#">Back to top ↑</a></footer></>;}
