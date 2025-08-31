import { useState, useRef, useEffect } from 'react';
import './CustomDropdown.css';


interface CustomDropdownProps {
  options: string[];
  placeholder?: string;
  selectedFilters: string[];
  handleSetFilters: (filter: string) => void;
}

export default function CustomDropdown({ options, placeholder, selectedFilters, handleSetFilters}: CustomDropdownProps): JSX.Element {
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
        className={`dropdown-toggle ${isOpen ? 'open' : ''}`}
        onClick={handleOpenDropdownMenu}
      >
        <span className="dropdown-selected">
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
          <div className="dropdown-menu-inner">
            {options.map((option) => (
              <div
                key={option}
                className={`dropdown-option ${isFilterSelected(option) ? 'selected' : ''}`}
                onClick={() => handleFilterClick(option)}
              >
                <div className="option-checkbox">
                  {isFilterSelected(option) && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <span className="option-label">{option}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
