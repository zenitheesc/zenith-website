import style from '../../styles/NavBar.module.css'
import NavLinks from './NavLinks'
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavHeader() {
	const [menu, setMenuState] = useState(false);

	const openMenu = (open) => {
		setMenuState(open);
	}

	useEffect(function onFirstMount() {

		window.addEventListener("resize", ()=>{openMenu(false)});

	}, []);

	return (
		<>
			<div className={style.navBarContainer}>
				<a href="./">
					<img className={style.navBarIcon} src="/images/NavigationBar/logo.png" />
				</a>

				<NavLinks className={style.navigationHeader} />

				{menu ?
					<FaTimes className={style.menuIcon} onClick={() => { openMenu(false) }} /> :
					<FaBars className={style.menuIcon} onClick={() => { openMenu(true) }} />
				}


			</div>
		</>
	)
}
