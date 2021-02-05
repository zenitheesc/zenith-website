import NavHeader from './NavHeader';
import NavMenu from './NavMenu';
import React, { useState, useEffect } from 'react';

function NavBar() {
	const [menu, setMenuState] = useState(false);

	const toggleMenu = (open) => {
		setMenuState(open);
	}

	useEffect(function onFirstMount() {

		window.addEventListener("resize", ()=>{toggleMenu(false)});

	}, []);

	return (
		<>
			<NavHeader toggleMenu={toggleMenu} isMenuOpen={menu}/>
			<NavMenu isMenuOpen={menu}/>
		</>
	)
}

export default NavBar;