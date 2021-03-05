import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { languageSelector } from '../styles/Footer.module.css';

export default function LanguageSelector() {
  const currPage = useRouter().asPath;
  return (
    <>

      <div className={languageSelector}>
        <ul>
          <li>
            <Link href={currPage} locale="pt">
              Português
            </Link>
          </li>
          <li>
            <Link href={currPage} locale="en">
              English
            </Link>
          </li>
          <li>
            <Link href={currPage} locale="es">
              Español
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
