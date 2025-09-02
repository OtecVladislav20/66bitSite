import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/breadcrumbs/breadcrumbs';
import Header from '../components/header/header';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchEmployee } from '../store/actions';


export default function Staff(): JSX.Element {
  const {id} = useParams();
  if (!id) {
    throw Error('Такого сотрудника нет!');
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchEmployee(id));
  }, [dispatch, id]);

  const employee = useAppSelector((state) => state.reducer.employee);
  const stackEmployee = employee.stack;

  return (
    <>
      <Header/>
      <main>
        <Breadcrumbs/>
        <section className='employee__wrapper flex'>
          <div className='employee__block'>
            <div className='flex'>
              <img src={employee.photo} alt="" className='employee__img'/>
              <div className='flex employee__text__wrapper'>
                <h1 className='default-text employee__name'>{employee.name}</h1>
                <p className='default-text employee__position'>{employee.position}</p>
                <div className='flex'>
                  {stackEmployee && stackEmployee.map((i) =>
                    <div key={i} className='stack__block'>{i}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='employee-info__wrapper flex'>
          <div className='employee-info__block'>
            <h2 className='default-text employee-info__title'>Основная информация</h2>
            <table className='employee-info__table'>
              <tbody>
                <tr>
                  <td className='employee-info__row'>Контактный телефон:</td>
                  <td className='employee-info__row'>{employee.phone}</td>
                </tr>
                <tr>
                  <td className='employee-info__row'>Дата рождения:</td>
                  <td className='employee-info__row'>{employee.birthdate}</td>
                </tr>
                <tr>
                  <td className='employee-info__row'>Дата устройства:</td>
                  <td className='employee-info__row'>{employee.dateOfEmployment}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </>
  );
}
