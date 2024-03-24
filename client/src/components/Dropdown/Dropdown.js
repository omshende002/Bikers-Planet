import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={toggleDropdown}>
        {title}
        <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}><a href="#">{item}</a></li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
