import styles from '../styles/Navbar.module.scss';
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidenav from './Sidenav';
import Userdetails from './Userdetails';
import Login from './Login';
import Users from './Users';

const Layout = () => {
	const [showHambuger, setshowHambuger] = useState<any>('');
	const { pathname } = useLocation();
	const handleHamburger = () => {
		showHambuger === styles.showSideNav
			? setshowHambuger('')
			: setshowHambuger(styles.showSideNav);
	};

	return (
		<>
			{pathname !== '/login' && (
				<>
					<Navbar handleHamburger={handleHamburger} />
					<Sidenav showHambuger={showHambuger} />
				</>
			)}
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/users" element={<Users />} />
				<Route path="/users/:id" element={<Userdetails />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</>
	);
};
export default Layout;
