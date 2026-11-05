import Brand from './Brand';
import { navigation } from '../../data/site.json';

export default function Header({ websiteCount }) {
  return (
    <header>
      <Brand />
      <nav aria-label="Portfolio navigation">
        {navigation.map(({ href, label }) => (
          <a href={href} key={href}>
            {label} {href === '#websites' && <sup>{String(websiteCount).padStart(2, '0')}</sup>}
          </a>
        ))}
      </nav>
    </header>
  );
}
