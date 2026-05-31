import React, { useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import styles from 'styles/HomepageHeroSection.module.css';
import { particlesConfig } from '../../public/particles/particles.const.ts';

function HomepageHeroSection() {
  const { t } = useTranslation();
  const title = t('homePage:homePageHero.title');
  const subtitle = t('homePage:homePageHero.subtitle');

  useEffect(() => {
    let isMounted = true;

    const initializeParticles = async () => {
      await import('particles.js');

      if (!isMounted || typeof window === 'undefined' || !window.particlesJS) {
        return;
      }

      const particlesContainer = document.getElementById('homepage-hero-particles');

      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }

      window.particlesJS('homepage-hero-particles', particlesConfig);
    };

    initializeParticles();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={`${styles.heroContainer} ${styles.heroContainerStaticImage}`}>
      <div id="homepage-hero-particles" className={styles.particlesLayer} />
      <h1>{title}</h1>
      <hr className={styles.hrAnimation} />
      <p>{subtitle}</p>
    </div>
  );
}

export default HomepageHeroSection;
