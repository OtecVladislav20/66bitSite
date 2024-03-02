export function Toggle(): JSX.Element {
  const root = document.querySelector(':root');
  const handleChangeTheme = () => {
    root?.classList.toggle('dark');
  };

  return (
    <label className="toggle__button">
      <input id="toggle__input" type="checkbox" className="toggle__input" onClick={handleChangeTheme}/>
      <span className="toggle__slider">
        <img src="../img/moon.svg" alt="" className="toggle__icon moon" />
        <img src="../img/sun.svg" alt="" className="toggle__icon sun" />
      </span>
    </label>
  );
}
