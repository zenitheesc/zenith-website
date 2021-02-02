
import {
	navbarContainer, 
	navbarIcon,
	itensContainer,
	navbarItem,
	itensContainerList,
	itensContainerMenu,
	menuIconDeactive,
	menuIconActive,
	itensContainerActive,
	itensContainerDeactive
	} from '../styles/NavBar.module.css'
import React, { useState, useEffect } from 'react';

function NavBar() {
	const [openMenu, setClick] = useState(true);
	const [showMenu, setMenu] = useState(true);

	const setMenuVisible = () => setMenu(!showMenu);
	const handleClick = () => setClick(!openMenu);


	useEffect(function onFirstMount() {
		const showMenu = () => {
			if (window.innerWidth <= 1100) {
				setMenu(false);
				setClick(false);
			} else {
				setMenu(true);
				setClick(true);
			}
		};

		showMenu();

		window.addEventListener("resize", showMenu);
	}, []);


	return (
		<div className={navbarContainer}>
			<a href="./">
				<img className={navbarIcon} src="/images/NavigationBar/logo.png" />
			</a>

			<div>
				<ul className={[`${itensContainer}`,
								 showMenu ? `${itensContainerList}` : `${itensContainerMenu}`,
								 (showMenu || openMenu) ? `${itensContainerActive}` : `${itensContainerDeactive}`
								 ].join(" ")}>
					<li className={navbarItem}>
						<a href="./oZenith">O ZENITH</a>
					</li>
					<li className={navbarItem}>
						<a href="./projetos">PROJETOS</a>
					</li>
					<li className={navbarItem}>
						<a href="./kurumim">KURUMIM</a>
					</li>
					<li className={navbarItem}>
						<a href="./processoSeletivo">PROCESSO SELETIVO</a>
					</li>
					<li className={navbarItem}>
						<a href="./contato">CONTATO</a>
					</li>
				</ul>
			</div>

			<div className={showMenu ? `${menuIconDeactive}` : `${menuIconActive}`} onClick={handleClick}>
				<a onClick={handleClick}>{openMenu ? "CL":"OP"}</a>
			</div>
		</div>
	)
}

export default NavBar;