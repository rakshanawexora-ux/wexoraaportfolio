import Brand from './Brand';
import { founder } from '../../data/site.json';

export default function Footer() {
  return (
    <footer>
      <Brand />
      <div>
        {founder.name}
        <span>{founder.role}</span>
      </div>
      <a href="#">Back to top ↑</a>
    </footer>
  );
}
