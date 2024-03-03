/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { PersonalList } from '../components/personal-list/personal-list';
import { Toggle } from '../components/toggle/toggle';
import '../style.css';
import { AppRoute } from '../const';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchInput } from '../components/search-input/search-input';


export function MainPage() {
  const [searchValue, setSearchValue] = useState('');


  const [employee, setEmployee] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  // const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const search = searchValue ? `&Name=${searchValue}` : '';
    if (search) {
      setCurPage(1);
    }
    if (fetching) {
      console.log('fetching');
      axios.get(`https://frontend-test-api.stk8s.66bit.ru/api/Employee?Page=${curPage}${search}`)
        .then((response) => {
          setEmployee([...employee, ...response.data]);
          setCurPage(prevState => prevState + 1);
          // setTotalCount(response.headers['x-token']);
        })
        .finally(() => setFetching(false));
    }
  }, [fetching, searchValue, curPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollHandler = (e: { target: { documentElement: { scrollHeight: number; scrollTop: number}}}) => {
    if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) { //&& employee.length < totalCount
      setFetching(true);
    }
  };

  return (
    <>
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
          </ul>
        </section>
        <section className="search">
          <h2>Список сотрудников</h2>
          <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
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
          <PersonalList employee={employee}/>
        </section>
      </main>
    </>
  );
}
