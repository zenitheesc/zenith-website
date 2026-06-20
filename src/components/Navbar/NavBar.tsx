import React, { useState, useEffect } from 'react';
import NavHeader from './NavHeader';
import style from 'styles/NavBar.module.css';

export default function NavBar() {
  const [scrollDir, setScrollDir] = useState<'top' | 'up' | 'down'>('top');

  useEffect(() => {
    const threshold = 5;
    const topThreshold = 90;
    let lastYPos = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const currYPos = window.pageYOffset;

      if (currYPos > topThreshold) {
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
  }, []);

  return (
    <div className={scrollDir === 'down' ? style.navBarContainerDeactive : style.navBarContainerActive}>
      <div
        className={style.navBarContainerBackground}
        style={{ backgroundColor: scrollDir === 'top' ? 'transparent' : 'black' }}
      />
      <NavHeader />
    </div>
  );
}
