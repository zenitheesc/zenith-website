import NavLinks from "./NavLinks";
import style from '../../styles/NavBar.module.css'

export default function NavMenu(props) {

	return (
		<div style={{display: props.isMenuOpen ? 'block' : 'none' }}>
			<NavLinks className={[style.navigationMenu]} />
		</div>
	)
}
