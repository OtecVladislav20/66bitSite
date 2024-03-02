import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../components/hooks';
import { Toggle } from '../components/toggle/toggle';
import { AppRoute, NameSpace } from '../const';
import { fetchEmployeeIDAction } from '../store/api-actions';
import { useEffect } from 'react';


export function InfoPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchEmployeeIDAction(id));
    }
  }, [dispatch, id]);

  const employeeID = useAppSelector((state) => state[NameSpace.Data].employeeID);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="../css/normalize.css" />
      <link rel="stylesheet" href="../css/style.css" />
      <header className="flex">
        <Link to={AppRoute.Main} className="header-logo">
          <img src="../img/Логотип 66бит 1.svg" alt="66bit" className="icon-logo" />
        </Link>
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
              <Link to={AppRoute.Main}>Главная</Link>
            </li>
            <li className="hierarchy__item">
              <img src="../img/Arrow.svg" alt="Arrow" />
            </li>
            <li className="hierarchy__item">
              <Link to={AppRoute.Main}>Список сотрудников</Link>
            </li>
            <li className="hierarchy__item">
              <img src="../img/Arrow.svg" alt="Arrow" />
            </li>
            <li className="hierarchy__item">
              <p>{employeeID.name}</p>
            </li>
          </ul>
        </section>
        <section className="data-person">
          <div className="data-person-container flex">
            <img src={employeeID.photo} alt="man" className="data-person__icon" />
            <div className="data-person__text flex">
              <h2 className="data-person-fio">{employeeID.name}</h2>
              <p className="data-person-prof">{employeeID.position}</p>
              <div className="data-person-skills flex">
                <div className="skill">{employeeID.stack}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-data">
          <h3 className="contact-data__title">Основная информация</h3>
          <div className="flex">
            <h4 className="contact-data-tel data-title">Контактный телефон:</h4>
            <p className="data-p">{employeeID.phone}</p>
          </div>
          <div className="flex">
            <h4 className="contact-data-birth data-title">Дата рождения:</h4>
            <p className="data-p">{employeeID.birthdate}</p>
          </div>
          <div className="flex">
            <h4 className="contact-data-date data-title">Дата устройства:</h4>
            <p className="data-p">{employeeID.dateOfEmployment}</p>
          </div>
        </section>
      </main>
    </>
  );
}
