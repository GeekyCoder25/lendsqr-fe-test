import styles from '../styles/Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ handleHamburger }: { handleHamburger: any }) => {
	return (
		<nav className={styles.nav}>
			<img src="/assets/images/logo.png" alt="logo" />
			<form className={styles.navForm}>
				<input type="search" placeholder="Search for anything" />
				<button>
					<img src="/assets/images/search.png" alt="search" />
				</button>
			</form>
			<ul>
				<li>
					<Link to="/">Docs</Link>
				</li>
				<li>
					<Link to="/">
						<img src="/assets/images/bell.png" alt="notifications" />
					</Link>
				</li>
				<li>
					<Link to="/">
						<img
							src="/assets/images/userLogo.png"
							alt="profile"
							className={styles.userLogo}
						/>
					</Link>
					<i className="fas fa-bars" onClick={handleHamburger}></i>
				</li>
				<li>
					<Link to="/">Username</Link>
					<img src="/assets/images/chevrondown.png" alt="arrow-down" />
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
