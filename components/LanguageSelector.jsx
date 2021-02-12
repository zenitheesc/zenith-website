import Link from 'next/link';
import React from 'react';
import { languageSelector } from '../styles/Footer.module.css';

export default function LanguageSelector() {
  return (
    <>

      <div className={languageSelector}>
        <ul>
          <li>
            <Link href="#" locale="pt">
              Português
            </Link>
          </li>
          <li>
            <Link href="#" locale="en">
              English
            </Link>
          </li>
          <li>
            <Link href="#" locale="es">
              Español
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
