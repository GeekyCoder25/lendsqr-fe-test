import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Dashboard.module.scss';
import { userHeaders } from '../data/lendsqldb';
const Dashboard = () => {
	const [users, setUsers] = useState<any[]>([]);
	const [filterInitial, setFilterInitial] = useState(0);
	const [filterFinal, setFilterFinal] = useState(10);
	const [hideFilter, sethideFilter] = useState(false);
	const [loading, setloading] = useState<any>(false);
	const [fetchMessage, setFetchMessage] = useState<any>('');
	const [errorLog, setErrorLog] = useState<any>(false);
	const [userTabs] = useState<number>(1);
	const [userTabsFinal, setuserTabsFinal] = useState<number>(0);
	useEffect(() => {
		setloading(true);
		window.innerWidth <= 1200 && sethideFilter(false);
		const fetchUsers = async () => {
			try {
				const res = await fetch(
					`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
				);
				const userData = await res.json();
				setloading(false);
				setuserTabsFinal(Math.floor(userData.length / 6));
				return userData;
			} catch (err: any) {
				setFetchMessage(err.message);
				setErrorLog(true);
			}
		};
		fetchUsers().then(userData => setUsers(userData));
	}, []);

	return (
		<main className={styles.main}>
			<header>
				<h2>Users</h2>
				<section>
					<div>
						<img src="/assets/images/usersMain.png" alt="users" />
						<p>Users</p>
						<h3>2,453</h3>
					</div>
					<div>
						<img src="/assets/images/activeMain.png" alt="activeusers" />
						<p>Active Users</p>
						<h3>2,453</h3>
					</div>
					<div>
						<img src="/assets/images/loansMain.png" alt="users" />
						<p>Users with loans</p>
						<h3>12,453</h3>
					</div>
					<div>
						<img src="/assets/images/savingsMain.png" alt="users" />
						<p>Users with savings</p>
						<h3>102,453</h3>
					</div>
				</section>
			</header>
			<article className={styles.table}>
				<section>
					{userHeaders.map(userHeader => (
						<div key={userHeader.header}>
							<h4>{userHeader.header}</h4>
							<img
								src="/assets/images/filter.png"
								alt="filter"
								onClick={() => {
									sethideFilter(prev => !prev);
								}}
							/>
						</div>
					))}
					{hideFilter && (
						<aside>
							<div>
								<label htmlFor="organization">Organization</label>
								<select name="organization" id="organization">
									<option value="select">Select</option>
									<option value="lendsqr">Lendsqr</option>
								</select>
							</div>
							<div>
								<label htmlFor="name">Username</label>
								<input type="name" id="name" placeholder="User" />
							</div>
							<div>
								<label htmlFor="email">Email</label>
								<input type="email" id="email" placeholder="Email" />
							</div>
							<div>
								<label htmlFor="date">Date</label>
								<input type="date" name="date" id="date" />
							</div>
							<div>
								<label htmlFor="phone">Phone Number</label>
								<input type="tel" id="phone" placeholder="Phone Number" />
							</div>
							<div>
								<label htmlFor="status">Status</label>
								<select name="status" id="status">
									<option value="select">Select</option>
									<option value="lendsqr">Lendsqr</option>
								</select>
							</div>
							<div>
								<button>Reset</button>
								<button>Filter</button>
							</div>
						</aside>
					)}
				</section>
				<section>
					{loading ? (
						!errorLog ? (
							<span className={styles.fetchMessage}>Loading...</span>
						) : (
							<span className={styles.fetchMessage}>
								{fetchMessage}
								<i className="fas fa-sad-tear"></i>
							</span>
						)
					) : (
						users
							.map(user => <Table key={user.id} user={user} />)
							.splice(filterInitial, filterFinal)
					)}
				</section>
			</article>
			<section>
				<p>
					Showing
					<span
						onClick={() => {
							setFilterInitial(prev => prev + 10);
							setFilterFinal(prev => prev + 10);
						}}
					>
						{filterFinal}
						<img src="/assets/images/switchArrow.png" alt="" />
					</span>
					out of {!errorLog && users.length}
				</p>
				<div>
					<i
						className="fas fa-chevron-left"
						onClick={() => {
							setFilterInitial(prev => prev - 10);
							setFilterFinal(prev => prev - 10);
						}}
					></i>
					<span>{userTabs}</span>
					<span>{userTabs + 1}</span>
					<span>{userTabs + 2}</span>
					<span>...</span>
					<span>{userTabsFinal - 1}</span>
					<span>{userTabsFinal}</span>
					<i
						className="fas fa-chevron-right"
						onClick={() => {
							setFilterInitial(prev => prev + 10);
							setFilterFinal(prev => prev + 10);
						}}
					></i>
				</div>
			</section>
		</main>
	);
};
export default Dashboard;

export function Table({ user }: { user: any }) {
	const [activeStatus, setactiveStatus] = useState('active');
	const [showModal, setshowModal] = useState(false);
	const activeStatusRef = useRef(null);
	const [activeStatusStyles, setactiveStatusStyles] = useState(styles.active);
	const showMore = () => {
		!showModal ? setshowModal(true) : setshowModal(false);
	};
	return (
		<p>
			<span>{user.orgName}</span>
			<span>{user.userName}</span>
			<span>{user.email} </span>
			<span>{user.phoneNumber}</span>
			<span>{user.createdAt}</span>
			<span
				onClick={showMore}
				ref={activeStatusRef}
				className={`${activeStatusStyles} ${styles.activeStatusRef}`}
			>
				{activeStatus}
				<img src="assets/images/more.png" alt="more" onClick={showMore} />
				{showModal && (
					<span className={styles.modal}>
						<Link to={`/users/${user.id}`}>
							<span>
								<img src="assets/images/view.png" alt="view" />
								view details
							</span>
						</Link>
						<span
							onClick={() => {
								setshowModal(false);
								setactiveStatus('pending');
								setactiveStatusStyles(styles.pending);
								setTimeout(() => {
									setactiveStatusStyles(styles.blacklist);
									setactiveStatus('blacklisted');
								}, 1000);
							}}
						>
							<img src="assets/images/blacklist.png" alt="blacklist" />
							blacklist user
						</span>
						{activeStatus !== 'active' ? (
							<span
								onClick={() => {
									setshowModal(false);
									setactiveStatus('pending');
									setactiveStatusStyles(styles.pending);
									setTimeout(() => {
										setactiveStatusStyles(styles.active);
										setactiveStatus('active');
									}, 1000);
								}}
							>
								<img src="assets/images/activate.png" alt="activate" />
								activate user
							</span>
						) : (
							<span
								onClick={() => {
									setshowModal(false);
									setactiveStatus('pending');
									setactiveStatusStyles(styles.pending);
									setTimeout(() => {
										setactiveStatusStyles(styles.inactive);
										setactiveStatus('inactive');
									}, 1000);
								}}
							>
								<img src="assets/images/activate.png" alt="activate" />
								deactivate user
							</span>
						)}
					</span>
				)}
			</span>
		</p>
	);
}
