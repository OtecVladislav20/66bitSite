import Header from '../components/header/header';


export default function StaffList(): JSX.Element {
  return (
    <>
      <Header/>
      <main>
        {/* <Breadcrumbs/> */}

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
      </main>
    </>
  );
}
