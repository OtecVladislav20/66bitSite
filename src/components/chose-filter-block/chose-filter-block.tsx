type TChoseFilterBlock = {
  filters: string[];
  handleFilterRemove: (filter: string) => void;
}

export default function ChoseFilterBlock({filters, handleFilterRemove}: TChoseFilterBlock) {
  return (
    <section className='filter-wrapper flex'>
      <div className='filter__block flex'>
        <div className="flex">
          <p className='default-text filter__title'>Выбранные фильтры:</p>
          <div className='flex'>
            {filters.map(((filter) =>(
              <button key={filter} className='filter__content flex' onClick={() => handleFilterRemove(filter)}>
                <span className="cross-wrapper">
                  <span className="custom-cross"></span>
                </span>
                <p className='default-text filter__content-text'>{filter}</p>
              </button>
            )))}
          </div>
        </div>
        <button className='filter__btn'>Найти</button>
      </div>
    </section>
  );
}
