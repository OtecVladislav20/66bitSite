import { useNavigate } from 'react-router-dom';
import Header from '../components/header/header';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import DropdownMenu from '../components/dropdown-menu/dropdown-nemu';
import { gender, positions, technology } from '../utils/const';
import { useEffect, useState } from 'react';
import ChoseFilterBlock from '../components/chose-filter-block/chose-filter-block';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchEmployees } from '../store/actions';


export default function StaffList(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const employees = useAppSelector((state) => state.reducer.employees);

  const [filters, setFilters] = useState<string[]>([]);

  useEffect(() => {
    const savedFilters = localStorage.getItem('filters');
    if (savedFilters) {
      const parsedFilters = JSON.parse(savedFilters) as string[];
      if (Array.isArray(parsedFilters)) {
        setFilters(parsedFilters);
      }
    }
  }, []);

  const handleSetFilters = (filterToAdd: string) => {
    if (!filters.some((p) => p === filterToAdd)) {
      const newFilters = [...filters, filterToAdd];
      setFilters(newFilters);
      localStorage.setItem('filters', JSON.stringify(newFilters));
    }
  };

  const handleFilterRemove = (filterToRemove: string) => {
    const newFilters = filters.filter((filter) => (filter !== filterToRemove));
    setFilters(newFilters);
    localStorage.setItem('filters', JSON.stringify(newFilters));
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
              <DropdownMenu
                options={positions}
                placeholder="Должность"
                selectedFilters={filters}
                handleSetFilters={handleSetFilters}
              />
              <DropdownMenu
                options={gender}
                placeholder="Пол"
                selectedFilters={filters}
                handleSetFilters={handleSetFilters}
              />
              <DropdownMenu
                options={technology}
                placeholder="Стек технологий"
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
                {employees.map((employee) => (
                  <tr key={employee.id} className='staff__item' onClick={() => navigate(`/staff-list/${employee.id}`)}>
                    <td>{employee.name}</td>
                    <td>{employee.position}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.birthdate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
