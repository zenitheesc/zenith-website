import React from 'react';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { navBarItem } from '../../styles/NavBar.module.css';

export default function NavLinks(props) {
  const { t } = useTranslation();
  const navTexts = t('common:navBar', { count: -1 }, { returnObjects: true });
  return (
    <>
      <ul className={props.className}>
        <li className={navBarItem}>
          <Link href="/zenith">{navTexts[0]}</Link>
        </li>
        <li className={navBarItem}>
          <Link href="/projetos">{navTexts[1]}</Link>
        </li>
        <li className={navBarItem}>
          <Link href="/kurumim">{navTexts[2]}</Link>
        </li>
        <li className={navBarItem}>
          <Link href="/processo-seletivo">{navTexts[3]}</Link>
        </li>
        <li className={navBarItem}>
          <a href="https://ob-site.vercel.app/">{navTexts[4]}</a>
        </li>
      </ul>
    </>
  );
}
