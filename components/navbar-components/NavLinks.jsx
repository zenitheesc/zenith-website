import React from 'react';
import Link from 'next/link';
import { navBarItem } from '../../styles/NavBar.module.css';

export default function NavLinks(props) {
  const {textContent} = props;
  return (
    <>
      <ul className={props.className}>
        <Link href="/zenith">
          <li className={navBarItem}>
            <a href="/zenith">{textContent[0]}</a>
          </li>
        </Link>
        <Link href="/projetos">
          <li className={navBarItem}>

            <a href="/projetos">{textContent[1]}</a>

          </li>
        </Link>
        <Link href="/kurumim">
          <li className={navBarItem}>

            <a href="/kurumim">{textContent[2]}</a>

          </li>
        </Link>
        <Link href="/processo-seletivo">
          <li className={navBarItem}>

            <a href="/processo-seletivo">{textContent[3]}</a>

          </li>
        </Link>
      </ul>

    </>
  );
}
