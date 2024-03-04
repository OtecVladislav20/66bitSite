import { useState } from 'react';


export function SortBlockItem() {
  const [openSort, setOpenSort] = useState(false);
  return (
    <div className="flex sortBlock" onClick={() => setOpenSort(!openSort)}>
      <p className="sortBlock-title">Пол</p>
      <img src="../img/sortBlock.svg" alt="Arrow" />
      {openSort && (
        <ul className="list-reset sortBlock-list">
          <li className="sortBlock-item flex">
            <p className="sortBlock-item-title">Муж</p>
            <input type="checkbox" className="sortBlock-checkbox" />
          </li>
          <li className="sortBlock-item flex">
            <p className="sortBlock-item-title">Жен</p>
            <input type="checkbox" className="sortBlock-checkbox" />
          </li>
        </ul>
      )}
    </div>
  );
}
