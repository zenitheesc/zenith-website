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
        <Link href="/zenith">
          <li className={navBarItem}>
            <a href="/zenith">{navTexts[0]}</a>
          </li>
        </Link>
        <Link href="/projetos">
          <li className={navBarItem}>
            <a href="/projetos">{navTexts[1]}</a>
          </li>
        </Link>
        <Link href="/kurumim">
          <li className={navBarItem}>
            <a href="/kurumim">{navTexts[2]}</a>
          </li>
        </Link>
        <Link href="/processo-seletivo">
          <li className={navBarItem}>
            <a href="/processo-seletivo">{navTexts[3]}</a>
          </li>
        </Link>
        <Link href="https://ob-site.vercel.app/" passHref={true}>
          <li className={navBarItem}>
            <a href="https://ob-site.vercel.app/" passHref={true}>{navTexts[4]}</a>
          </li>
        </Link>
        <Link href="/lancamentos" passHref={true}>
          <li className={navBarItem}>
            <a href="/lancamentos" passHref={true}>{navTexts[5]}</a>
          </li>
        </Link>
      </ul>
    </>
  );
}
