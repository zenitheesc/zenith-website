import React, { useState, useEffect } from 'react';
import NavHeader from './NavHeader';
import NavMenu from './NavMenu';
import style from '../../styles/NavBar.module.css';

function NavBar(props) {
  const [menu, setMenuState] = useState(false);
  const [scrollDir, setScrollDir] = useState('top');

  const toggleMenu = (open) => {
    setMenuState(open);
  };

  useEffect(function onFirstMount() {

    const closeMenu = () => {
      toggleMenu(false);
    }

    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  useEffect(() => {
    toggleMenu(false);
    const threshold = 5;
    const topThreshHold = 90;

    let lastYPos = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const currYPos = window.pageYOffset;

      if (currYPos > topThreshHold) {
        if (Math.abs(currYPos - lastYPos) < threshold) {
          ticking = false;
          return;
        }
        setScrollDir(currYPos > lastYPos ? 'down' : 'up');
        lastYPos = currYPos > 0 ? currYPos : 0;
      } else {
        setScrollDir('top');
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <div className={scrollDir === 'down' ? style.navBarContainerDeactive : style.navBarContainerActive}>
      <div className={style.navBarContainerBackground} style={{ backgroundColor: (scrollDir === 'top') ? 'transparent' : 'black' }} />
      <NavHeader textContent={props.textContent} toggleMenu={toggleMenu} isMenuOpen={menu} />
      <NavMenu textContent={props.textContent} isMenuOpen={menu} />
    </div>
  );
}

export default NavBar;
