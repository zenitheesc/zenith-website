import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { languageSelector } from 'styles/Footer.module.css';

export default function LanguageSelector() {
  const currPage = useRouter().asPath;
  return (
    <>
      <div className={languageSelector}>
        <ul>
          <Link href={currPage} locale="pt">
            <li>
              Português
              </li>
          </Link>

          <Link href={currPage} locale="en">
            <li>
              English
              </li>
          </Link>

          <Link href={currPage} locale="es">
            <li>
              Español
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
