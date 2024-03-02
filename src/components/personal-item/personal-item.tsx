import { Link } from 'react-router-dom';


type TPersonalItem = {
  id: number;
  fio: string;
  prof: string;
  phone: string;
  birth: string;
}

export function PersonalItem({id, fio, prof, phone, birth}:TPersonalItem): JSX.Element {
  return (
    <Link to={`/api/Employee/${id}`} className="info-personal__item flex">
      <p>{fio}</p>
      <p>{prof}</p>
      <p>{phone}</p>
      <p>{birth}</p>
    </Link>
  );
}
