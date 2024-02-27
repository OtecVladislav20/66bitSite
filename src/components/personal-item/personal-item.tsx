import { Link } from 'react-router-dom';

export function PersonalItem(): JSX.Element {
  return (
    <Link to="/info" className="info-personal__item flex">
      <p>Дмитриев Игорь Степанович</p>
      <p>Дизайнер</p>
      <p>+7 934 349-43-23</p>
      <p>23.09.2000</p>
    </Link>
  );
}
