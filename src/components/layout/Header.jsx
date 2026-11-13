import Brand from './Brand';
import ArrowIcon from '../ui/ArrowIcon';
import { navigation } from '../../data/site.json';

export default function Header({ websiteCount, onNavigate }) {
  return (
    <header>
      <Brand />
      <nav aria-label="Portfolio navigation">
        {navigation.map(({ href, label }) => (
          <a href={href} key={href} onClick={(event) => onNavigate?.(event, href)}>
            {label} {href === '#websites' && <sup>{String(websiteCount).padStart(2, '0')}</sup>}
          </a>
        ))}
      </nav>
      <a className="header-action" href="#work" onClick={(event) => onNavigate?.(event, '#work')}>
        Explore projects <ArrowIcon />
      </a>
    </header>
  );
}
