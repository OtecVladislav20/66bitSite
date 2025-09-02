import { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';


interface CustomDropdownProps {
  options: string[];
  placeholder?: string;
  selectedFilters: string[];
  handleSetFilters: (filter: string) => void;
}

export default function DropdownMenu({ options, placeholder, selectedFilters, handleSetFilters}: CustomDropdownProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleFilterClick = (option: string) => {
    handleSetFilters(option);
    setIsOpen(false);
  };

  const handleOpenDropdownMenu = () => {
    setIsOpen(!isOpen);
  };

  const isFilterSelected = (option: string) => selectedFilters.some((selected) => selected === option);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <div
        className="dropdown-toggle"
        onClick={handleOpenDropdownMenu}
      >
        <span className={`dropdown-selected ${isOpen ? 'open' : ''}`}>
          {placeholder}
        </span>
        <svg
          className={`dropdown-arrow ${isOpen ? 'rotated' : ''}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-option"
              onClick={() => handleFilterClick(option)}
            >
              {isFilterSelected(option) ?
                <img src="../../src/assets/img/checkboxActive.svg" alt="" className="option-checkbox"/>
                :
                <img src="../../src/assets/img/checkbox.svg" alt="" className="option-checkbox"/>}
              <span>{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
