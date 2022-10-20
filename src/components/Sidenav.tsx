import styles from '../styles/Navbar.module.scss';
import { Link, NavLink } from 'react-router-dom';
import { customers } from '../data/lendsqldb';
import { businesses } from '../data/lendsqldb';
import { settings } from '../data/lendsqldb';

const Sidenav = ({ showHambuger }: { showHambuger: boolean }) => {
	return (
		<nav className={`${styles.sideNav} ${showHambuger}`}>
			<article>
				<p>
					<img src="/assets/images/switch.png" alt="switch" />
					Switch Organization
					<img src="/assets/images/switchArrow.png" alt="switchArrow" />
				</p>
				<section>
					<h4>CUSTOMERS</h4>
					{customers &&
						customers.map(navlink => (
							<ul key={navlink.icon}>
								<NavLink to="#">
									<img
										src={`/assets/images/${navlink.icon}.png`}
										alt={navlink.text}
									/>
									<span>{navlink.text}</span>
								</NavLink>
							</ul>
						))}
				</section>
				<section>
					<h4>BUSINESSES</h4>
					{businesses &&
						businesses.map(navlink => (
							<NavLink to="#" key={navlink.icon}>
								<img
									src={`/assets/images/${navlink.icon}.png`}
									alt={navlink.text}
								/>
								<span>{navlink.text}</span>
							</NavLink>
						))}
				</section>
				<section className={styles.settings}>
					<h4>SETTINGS</h4>
					{settings &&
						settings.map(navlink => (
							<NavLink to="#" key={navlink.icon}>
								<img
									src={`/assets/images/${navlink.icon}.png`}
									alt={navlink.text}
								/>
								<span>{navlink.text}</span>
							</NavLink>
						))}
				</section>
				<hr className={styles.navBorder} />
				<Link to="/login" className={styles.logout}>
					<img src="/assets/images/logout.png" alt="logout" />
					<span>logout</span>
				</Link>
			</article>
		</nav>
	);
};
export default Sidenav;
