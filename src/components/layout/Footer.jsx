import Brand from './Brand';
import ArrowIcon from '../ui/ArrowIcon';
import { founder } from '../../data/site.json';

export default function Footer() {
  return (
    <footer>
      <div className="footer-heading">
        <p>YOUR BUSINESS. ONE TEAM THAT GETS IT.</p>
        <div>
          <h2>
            Good ideas.
            <br />
            <em>Made real.</em>
          </h2>
          <a className="footer-arrow" href="#" aria-label="Back to top">
            <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <Brand />
        <div>
          {founder.name}
          <span>{founder.role}</span>
        </div>
        <a href="#">
          Back to top <ArrowIcon />
        </a>
      </div>
    </footer>
  );
}
