import { Toggle } from '../components/toggle';

export function InfoPage() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="../css/normalize.css" />
      <link rel="stylesheet" href="../css/style.css" />
      <header className="flex">
        <a href="#" className="header-logo">
          <img src="../img/Логотип 66бит 1.svg" alt="66bit" className="icon-logo" />
        </a>
        <div className="header-info flex">
          <ul className="header__list list-reset flex">
            <li className="header__item">
              <p className="header-nav__phone">+7 343 290 84 76</p>
            </li>
            <li className="header__item">
              <p className="header-nav__email">info@66bit.ru</p>
            </li>
          </ul>
          <Toggle />
        </div>
      </header>
      <main>
        <section className="hierarchy flex">
          <ul className="hierarchy__list list-reset flex">
            <li className="hierarchy__item">
              <a href="#">Главная</a>
            </li>
            <li className="hierarchy__item">
              <img src="../img/Arrow.svg" alt="Arrow" />
            </li>
            <li className="hierarchy__item">
              <a href="#">Список сотрудников</a>
            </li>
            <li className="hierarchy__item">
              <img src="../img/Arrow.svg" alt="Arrow" />
            </li>
            <li className="hierarchy__item">
              <a href="#">Дмитриев Игорь Степанович</a>
            </li>
          </ul>
        </section>
        <section className="data-person">
          <div className="data-person-container flex">
            <img src="../img/png/Man.png" alt="man" className="data-person__icon" />
            <div className="data-person__text flex">
              <h2 className="data-person-fio">Дмитриев Игорь Степанович</h2>
              <p className="data-person-prof">Дизайнер</p>
              <div className="data-person-skills flex">
                <div className="skill">Figma</div>
                <div className="skill">Adobe Illustrator</div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-data">
          <h3 className="contact-data__title">Основная информация</h3>
          <div className="flex">
            <h4 className="contact-data-tel data-title">Контактный телефон:</h4>
            <p className="data-p">+7 934 349-43-23</p>
          </div>
          <div className="flex">
            <h4 className="contact-data-birth data-title">Дата рождения:</h4>
            <p className="data-p">23.09.2000</p>
          </div>
          <div className="flex">
            <h4 className="contact-data-date data-title">Дата устройства:</h4>
            <p className="data-p">18.01.2019</p>
          </div>
        </section>
      </main>
    </>
  );
}
