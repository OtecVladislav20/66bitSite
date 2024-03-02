import { PersonalItem } from '../personal-item/personal-item';
import { TEmployee } from '../types/employee';

type TPersonalList = {
  employee: TEmployee[];
}

export function PersonalList({employee}: TPersonalList): JSX.Element {
  return (
    <ul className="list-reset">
      {employee.map((em) =>
        <PersonalItem key={em.id} id={em.id} fio={em.name} prof={em.position} phone={em.phone} birth={em.birthdate}/>
      )}
    </ul>
  );
}
