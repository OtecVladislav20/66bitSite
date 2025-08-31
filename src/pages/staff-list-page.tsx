import { useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import CustomDropdown from '../components/dropdown-menu/dropdown-nemu';
import { positions } from '../utils/const';
import { useState } from 'react';
import ChoseFilterBlock from '../components/chose-filter-block/chose-filter-block';


export default function StaffList(): JSX.Element {
  const navigate = useNavigate();
  const [filters, setFilters] = useState<string[]>(localStorage.getItem('filters') || []);

  const handleSetFilters = (filterToAdd: string) => {
    if (!filters.some((p) => p === filterToAdd)) {
      const newFilters = [...filters, filterToAdd];
      setFilters(newFilters);
      localStorage.setItem('filters', newFilters);
    }
  };

  const handleFilterRemove = (filterToRemove: string) => {
    setFilters((prev) =>
      prev.filter((filter) => (filter !== filterToRemove))
    );
  };

  return (
    <>
      <Header/>
      <main>
        <Breadcrumbs/>

        <section className='search-wrapper flex'>
          <div className='search__block'>
            <h1 className='search__title default-text'>Список сотрудников</h1>
            <div className='search__selectors flex'>
              <CustomDropdown
                options={positions}
                placeholder="Должность"
                selectedFilters={filters}
                handleSetFilters={handleSetFilters}
              />
            </div>
            <input type="text" className='search__input' placeholder="Поиск"/>
          </div>
        </section>
        <ChoseFilterBlock filters={filters} handleFilterRemove={handleFilterRemove}/>
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
