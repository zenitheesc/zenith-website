import React from 'react';
import Link from 'next/link';
import { navBarItem } from '../../styles/NavBar.module.css';

export default function NavLinks(props) {
  return (
    <>
      <ul className={props.className}>
        <Link href="/Zenith">
          <li className={navBarItem}>
            <a href="/Zenith">O ZENITH</a>
          </li>
        </Link>
        <Link href="/Projetos">
          <li className={navBarItem}>

            <a href="/Projetos">PROJETOS</a>

          </li>
        </Link>
        <Link href="/Kurumim">
          <li className={navBarItem}>

            <a href="/Kurumim">KURUMIM</a>

          </li>
        </Link>
        <Link href="/ProcessoSeletivo">
          <li className={navBarItem}>

            <a href="/ProcessoSeletivo">PROCESSO SELETIVO</a>

          </li>
        </Link>
      </ul>

    </>
  );
}
