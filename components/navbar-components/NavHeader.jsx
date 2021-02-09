import React from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import style from '../../styles/NavBar.module.css';
import NavLinks from './NavLinks';

export default function NavHeader(props) {
  const { toggleMenu } = props;
  const { isMenuOpen } = props;

  return (
    <>
      <div className={style.navBarHeaderContainer}>

        <a href="./">
          <img className={style.navBarIcon} src="/images/NavigationBar/logo.webp" />
        </a>

        <NavLinks className={style.navigationHeader} />

        <div className={style.menuIconWrapper}>
          <Hamburger size={24} color="#ffffff" duration={0.3} toggled={isMenuOpen} toggle={toggleMenu} rounded />
        </div>

      </div>
    </>
  );
}
