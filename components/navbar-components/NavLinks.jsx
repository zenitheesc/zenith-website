import React from 'react';
import Link from 'next/link';
import { navBarItem } from '../../styles/NavBar.module.css';

export default function NavLinks(props) {
  return (
    <>
      <ul className={props.className}>
        <li className={navBarItem}>
          <Link href="/Zenith">
            <a href="/Zenith">O ZENITH</a>
          </Link>
        </li>
        <li className={navBarItem}>
          <Link href="/Projetos">
            <a href="/Projetos">PROJETOS</a>
          </Link>
        </li>
        <li className={navBarItem}>
          <Link href="/Kurumim">
            <a href="/Kurumim">KURUMIM</a>
          </Link>
        </li>
        <li className={navBarItem}>
          <Link href="/ProcessoSeletivo">
            <a href="/ProcessoSeletivo">PROCESSO SELETIVO</a>
          </Link>
        </li>
      </ul>

    </>
  );
}
