export function SearchInput({searchValue, setSearchValue}) {
  return (
    <input
      value={searchValue}
      className="search__input"
      type="text" placeholder="Поиск"
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
