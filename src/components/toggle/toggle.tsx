import { useEffect, useState } from 'react';
import { useTheme } from '../../hooks/useTheme';

export default function Toggle(): JSX.Element {
  const { theme, setTheme } = useTheme();

  const [checked, setChecked] = useState(true);
  function chengeCheckbox() {
    setChecked(!checked);
    if (theme == 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }

  let t = localStorage.getItem('app-theme');
  useEffect(() => {
    if (t == 'dark'){
      setChecked(false);
    } else {
      setChecked(true);
    }
  }, []);

  return (
    <label className="toggle">
      <input type="checkbox" className="toggle__checkbox" checked={checked} onChange={chengeCheckbox}/>
      <span className="toggle__flag"></span>
    </label>
  );
}
