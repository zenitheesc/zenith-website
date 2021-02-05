import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  navbarContainer,
  navbarIcon,
  itensContainer,
  navbarItem,
  itensContainerList,
  itensContainerMenu,
  menuIconDeactive,
  menuIconActive,
  itensContainerActive,
  itensContainerDeactive,
} from '../styles/NavBar.module.css';

function NavBar() {
  const [openMenu, setClick] = useState(true);
  const [showMenu, setMenu] = useState(true);

  const setMenuVisible = () => setMenu(!showMenu);
  const handleClick = () => setClick(!openMenu);

  useEffect(() => {
    const showMenu = () => {
      if (window.innerWidth <= 1100) {
        setMenu(false);
        setClick(false);
      } else {
        setMenu(true);
        setClick(true);
      }
    };

    showMenu();

    window.addEventListener('resize', showMenu);
  }, []);

  return (
    <div className={navbarContainer}>
      <a href="./">
        <img className={navbarIcon} src="/images/NavigationBar/logo.png" alt="Logo" />
      </a>

      <div>
        <ul className={[`${itensContainer}`,
          showMenu ? `${itensContainerList}` : `${itensContainerMenu}`,
          (showMenu || openMenu) ? `${itensContainerActive}` : `${itensContainerDeactive}`,
        ].join(' ')}
        >
          <li className={navbarItem}>
            <Link href="/Zenith">
              <a>O ZENITH</a>
            </Link>
          </li>
          <li className={navbarItem}>
            <Link href="/Projetos">
              <a>PROJETOS</a>
            </Link>
          </li>
          <li className={navbarItem}>
            <Link href="/Kurumim">
              <a>KURUMIM</a>
            </Link>
          </li>
          <li className={navbarItem}>
            <Link href="/ProcessoSeletivo">
              <a>PROCESSO SELETIVO</a>
            </Link>
          </li>
        </ul>
      </div>

      <div className={showMenu ? `${menuIconDeactive}` : `${menuIconActive}`} onClick={handleClick}>
        <a onClick={handleClick}>{openMenu ? 'CL' : 'OP'}</a>
      </div>
    </div>
  );
}

export default NavBar;
