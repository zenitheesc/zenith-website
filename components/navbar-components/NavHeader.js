import style from '../../styles/NavBar.module.css'
import NavLinks from './NavLinks'
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavHeader(props) {

	const toggleMenu = props.toggleMenu;
	const isMenuOpen = props.isMenuOpen;

	return (
		<>
			<div className={style.navBarContainer}>
				<a href="./">
					<img className={style.navBarIcon} src="/images/NavigationBar/logo.png" />
				</a>

				<NavLinks className={style.navigationHeader} />

				{isMenuOpen ?
					<FaTimes className={style.menuIcon} onClick={() => { toggleMenu(false) }} /> :
					<FaBars className={style.menuIcon} onClick={() => { toggleMenu(true) }} />
				}


			</div>
		</>
	)
}
