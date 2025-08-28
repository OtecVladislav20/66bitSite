import Toggle from '../toggle/toggle';

export default function Header(): JSX.Element {
  return (
    <header className="flex header__wrapper">
      <div className="header flex">
        <a href="/">
          <img src="../../src/assets/img/logo.svg" alt="" />
        </a>
        <div className="flex">
          <div className="flex header__text__wrapper">
            <a href="" className="default-text header__text">+7 343 290 84 76</a>
            <a href="" className="default-text header__text">info@66bit.ru</a>
          </div>
          <Toggle/>
        </div>
      </div>
    </header>
  );
}
