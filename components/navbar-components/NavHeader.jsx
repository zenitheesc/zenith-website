import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import style from '../../styles/NavBar.module.css';
import NavLinks from './NavLinks';

export default function NavHeader(props) {
  const { toggleMenu } = props;
  const { isMenuOpen } = props;

  return (
    <>
      <div className={style.navBarHeaderContainer}>
        <a href="./">
          <img className={style.navBarIcon} src="/images/NavigationBar/logo.png" />
        </a>

        <NavLinks className={style.navigationHeader} />

        {isMenuOpen
          ? <FaTimes className={style.menuIcon} onClick={() => { toggleMenu(false); }} />
          : <FaBars className={style.menuIcon} onClick={() => { toggleMenu(true); }} />}

      </div>
    </>
  );
}
