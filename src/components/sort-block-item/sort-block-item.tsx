import { useState } from 'react';


type TSortArray = {
  sortTitle: string;
  sortArray: string[];
  set: React.Dispatch<React.SetStateAction<string>>;
}

export function SortBlockItem({sortTitle, sortArray, set}: TSortArray) {
  const [openSort, setOpenSort] = useState(false);
  const [selected, setSelected] = useState(-1);

  const handleClickOnSort = (i: number, name: string) => {
    setSelected(i);
    set(name);
    setOpenSort(false);
    if (selected === i) {
      setSelected(-1);
    }
  };

  return (
    <div className="flex sortBlock">
      <div className="flex" onClick={() => setOpenSort(!openSort)}>
        <p className="sortBlock-title">{sortTitle}</p>
        <img src="../img/sortBlock.svg" alt="Arrow" />
      </div>
      {openSort && (
        <ul className="list-reset sortBlock-list">
          {sortArray.map((name, i) => (
            <li
              key={name}
              className="sortBlock-item flex"
              onClick={() => handleClickOnSort(i, name)}
            >
              <p className="sortBlock-item-title">{name}</p>
              <input type="checkbox" className="sortBlock-checkbox" checked={selected === i}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
