import Brand from './Brand';
import ArrowIcon from '../ui/ArrowIcon';
import { founder } from '../../data/site.json';

export default function Footer() {
  return (
    <footer>
      <div className="footer-heading">
        <p>LET’S CREATE SOMETHING MEANINGFUL.</p>
        <div>
          <div className="footer-copy">
            <h2>
              Every brand
              <br />
              has a story.
              <br />
              <em>We make it digital.</em>
            </h2>
            <p className="footer-description">
              Turning ideas into digital experiences that connect, inspire, and leave a lasting
              impression.
            </p>
          </div>
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
