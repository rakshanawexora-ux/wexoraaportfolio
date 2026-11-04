import Brand from './Brand';
import { brand, founder } from '../../data/site.json';

export default function Footer() {
  return (
    <footer>
      <Brand />
      <div>
        {founder.name}
        <span>{founder.role}</span>
      </div>
      <a href={brand.portfolioPdf} download>
        Download original portfolio ↗
      </a>
      <a href="#">Back to top ↑</a>
    </footer>
  );
}
