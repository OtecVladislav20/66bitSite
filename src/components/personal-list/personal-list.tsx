import { PersonalItem } from '../personal-item/personal-item';

export function PersonalList(): JSX.Element {
  return (
    <ul className="list-reset">
      <PersonalItem/>
      <PersonalItem/>
      <PersonalItem/>
      <PersonalItem/>
      <PersonalItem/>
    </ul>
  );
}
