import { useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';


export default function StaffList(): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <Header/>
      <main>
        <Breadcrumbs/>

        <section className='search-wrapper flex'>
          <div className='search__block'>
            <h1 className='search__title default-text'>Список сотрудников</h1>
            <div className='search__selectors flex'>
              <select name="" id="">
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
              </select>
              <select name="" id="">
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
              </select>
              <select name="" id="">
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
                <option value="">sdfsdfsadf</option>
              </select>
            </div>
            <input type="text" className='search__input' placeholder="Поиск"/>
          </div>
        </section>

        <section className='filter-wrapper flex'>
          <div className='filter__block flex'>
            <div className='flex'>
              <p className='default-text filter__title'>Выбранные фильтры:</p>
              <button className='filter__content flex'>
                <span className="cross-wrapper">
                  <span className="custom-cross"></span>
                </span>
                <p className='default-text filter__content-text'>FullStack</p>
              </button>
            </div>
            <button className='filter__btn'>Найти</button>
          </div>
        </section>

        <section className='staff__list-wrapper flex'>
          <div className='staff__list'>
            <table className='staff__table'>
              <thead>
                <tr>
                  <td className='td__title'>ФИО</td>
                  <td className='td__title'>Должность</td>
                  <td className='td__title'>Телефон</td>
                  <td className='td__title'>Дата рождения</td>
                </tr>
              </thead>
              <tbody>
                <tr className='staff__item' onClick={() => navigate('/staff-list/12312331')}>
                  <td>Дмитриев Игорь Степанович</td>
                  <td>Дизайнер</td>
                  <td>+7 934 349-43-23</td>
                  <td>23.09.2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
