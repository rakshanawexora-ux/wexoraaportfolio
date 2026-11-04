import { brand } from '../../data/site.json';

export default function Brand() {
  return (
    <a className="brand" href="#" aria-label={`${brand.name} home`}>
      <img src={brand.logo} alt="Wexoraa original logo" />
      <span>
        wexoraa<small>INFOTECH</small>
      </span>
    </a>
  );
}
