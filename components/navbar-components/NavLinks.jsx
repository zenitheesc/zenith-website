import {navBarItem} from '../../styles/NavBar.module.css';
import Link from 'next/link';

export default function NavLinks(props) {
	return (
		<>
			<ul className={props.className}>
				<li className={navBarItem}>
					<Link href="/Zenith">
						<a >O ZENITH</a>
					</Link>
				</li>
				<li className={navBarItem}>
					<Link href="/Projetos">
						<a>PROJETOS</a>
					</Link>
				</li>
				<li className={navBarItem}>
					<Link href="/Kurumim">
						<a>KURUMIM</a>
					</Link>
				</li>
				<li className={navBarItem}>
					<Link href="/ProcessoSeletivo">
						<a>PROCESSO SELETIVO</a>
					</Link>
				</li>
			</ul>

		</>
	)
}

