import '../style.css';


export function MainPage() {
  return (
    <>
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
          <label className="toggle__button">
            <input id="toggle__input" type="checkbox" className="toggle__input" />
            <span className="toggle__slider">
              <img src="../img/moon.svg" alt="" className="toggle__icon moon" />
              <img src="../img/sun.svg" alt="" className="toggle__icon sun" />
            </span>
          </label>
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
        <section className="search">
          <h2>Список сотрудников</h2>
          <input className="search__input" type="text" placeholder="Поиск" />
        </section>
        <section className="chosen-filter flex">
          <h3 className="chosen-filter__title">Выбранные фильтры:</h3>
          <ul className="list-reset flex">
            <li className="chosen-filter__item flex">
              <button className="chosen-filter__item__button button-reset">
                <img src="../img/X.svg" alt="x" />
              </button>
              <p>fullstack</p>
            </li>
            <li className="chosen-filter__item flex">
              <button className="chosen-filter__item__button button-reset">
                <img src="../img/X.svg" alt="x" />
              </button>
              <p>fullstack</p>
            </li>
          </ul>
          <button className="chosen-filter__button button-reset">Найти</button>
        </section>
        <section className="data-personal">
          <ul className="data-personal__list list-reset flex">
            <li className="">ФИО</li>
            <li>Должность</li>
            <li>Телефон</li>
            <li>Дата рождения</li>
          </ul>
        </section>
        <section className="info-personal">
          <ul className="list-reset">
            <li className="info-personal__item flex info-personal__item--active">
              <p>Дмитриев Игорь Степанович</p>
              <p>Дизайнер</p>
              <p>+7 934 349-43-23</p>
              <p>23.09.2000</p>
            </li>
            <li className="info-personal__item flex">
              <p>Дмитриев Игорь Степанович</p>
              <p>Дизайнер</p>
              <p>+7 934 349-43-23</p>
              <p>23.09.2000</p>
            </li>
            <li className="info-personal__item flex">
              <p>Дмитриев Игорь Степанович</p>
              <p>Дизайнер</p>
              <p>+7 934 349-43-23</p>
              <p>23.09.2000</p>
            </li>
            <li className="info-personal__item flex">
              <p>Дмитриев Игорь Степанович</p>
              <p>Дизайнер</p>
              <p>+7 934 349-43-23</p>
              <p>23.09.2000</p>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
