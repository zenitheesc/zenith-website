import React from 'react';
import NavLinks from './NavLinks';
import style from '../../styles/NavBar.module.css';

export default function NavMenu(props) {
  return (
    <div>
      <NavLinks
        className={
          props.isMenuOpen
            ? style.navigationMenuActive
            : style.navigationMenuDeactive
        }
        textContent={props.textContent}
      />
    </div>
  );
}
