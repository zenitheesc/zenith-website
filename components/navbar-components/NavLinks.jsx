import React from 'react';
import Link from 'next/link';
import { navBarItem } from '../../styles/NavBar.module.css';

export default function NavLinks(props) {
  const { textContent } = props;
  return (
    <>
      <ul className={props.className}>
        <Link href="/Zenith">
          <li className={navBarItem}>
            <a href="/Zenith">{textContent[0]}</a>
          </li>
        </Link>
        <Link href="/Projetos">
          <li className={navBarItem}>
            <a href="/Projetos">{textContent[1]}</a>
          </li>
        </Link>
        <Link href="/Kurumim">
          <li className={navBarItem}>
            <a href="/Kurumim">{textContent[2]}</a>
          </li>
        </Link>
        <Link href="/ProcessoSeletivo">
          <li className={navBarItem}>
            <a href="/ProcessoSeletivo">{textContent[3]}</a>
          </li>
        </Link>
      </ul>
    </>
  );
}
