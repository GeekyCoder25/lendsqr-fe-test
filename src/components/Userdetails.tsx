import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/Userdetails.module.scss';
const Userdetails = () => {
	const { id } = useParams();
	const [userParams, setuserParams] = useState<any>(null);
	const [loading, setloading] = useState<any>(false);
	const [fetchMessage, setFetchMessage] = useState<any>('');
	useEffect(() => {
		setloading(true);
		const fetchUsers = async () => {
			try {
				const res = await fetch(
					`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
				);
				const userData = await res.json();
				return userData;
			} catch (err: any) {
				setFetchMessage(err.message);
				setloading(false);
			}
		};
		fetchUsers().then(userData => setuserParams(userData));
		localStorage.setItem('theme', `${id}`);
	}, [id, userParams]);
	return (
		<main className={styles.main}>
			{!userParams ? (
				loading ? (
					<p className={styles.loading}>Loading...</p>
				) : (
					<p className={styles.loading}>
						404 | {fetchMessage}
						<i className="fas fa-sad-tear"></i>
					</p>
				)
			) : (
				<article>
					<div>
						<Link to="/users" className={styles.back}>
							<img src="/assets/images/backarrow.png" alt="back" />
							<span>Back to Users</span>
						</Link>
						<div className={styles.header}>
							<h2>User Details</h2>
							<div>
								<button>blacklist user</button>
								<button>activate user</button>
							</div>
						</div>
					</div>
					<header>
						<section>
							<div>
								<img
									src={userParams.profile.avatar}
									alt={userParams.userName}
									onError={e => {
										(e.target as HTMLImageElement).src =
											'/assets/images/profile.png';
									}}
								/>
							</div>
							<div>
								<div>
									<h2>{`${userParams.profile.firstName} ${userParams.profile.lastName}`}</h2>
									<p>{userParams.accountNumber}</p>
								</div>
								<div>
									<p>User's Tier</p>
									<span>
										<img src="/assets/images/starfilled.png" alt="star" />
										<img src="/assets/images/star.png" alt="star" />
										<img src="/assets/images/star.png" alt="star" />
									</span>
								</div>
								<div>
									<h3>₦{userParams.accountBalance}</h3>
									<p>{`${userParams.profile.bvn}/${userParams.profile.address}`}</p>
								</div>
							</div>
						</section>
						<section>
							<p className={styles.userDetailsActive}>General Details</p>
							<p>Documents</p>
							<p>Bank Details</p>
							<p>Loans</p>
							<p>Savings</p>
							<p>App and System</p>
						</section>
					</header>
					<main>
						<article>
							<h1>Personal Information</h1>
							<section>
								<div>
									<span>full name</span>
									<h3>{`${userParams.profile.firstName} ${
										userParams.profile.lastName || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Phone Number</span>
									<h3>{`${
										userParams.profile.phoneNumber || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Email Address</span>
									<h3 className={styles.email}>{`${
										userParams.email || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>bvn</span>
									<h3>{`${userParams.profile.bvn || 'Data Not Found'}`}</h3>
								</div>
								<div>
									<span>Marital status</span>
									<h3>{`${
										userParams.profile.maritaStatus || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Children</span>
									<h3>{`${
										userParams.profile.children || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Type of residence</span>
									<h3>{`${
										userParams.profile.residence || 'Data Not Found'
									}`}</h3>
								</div>
							</section>
						</article>
						<article>
							<h1>Education and Employment</h1>
							<section>
								<div>
									<span>level of education</span>
									<h3>{`${userParams.education.level || 'Data Not Found'}`}</h3>
								</div>
								<div>
									<span>employment status</span>
									<h3>{`${
										userParams.education.employmentStatus || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>sector of employment</span>
									<h3>{`${
										userParams.education.sector || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Duration of employment</span>
									<h3>{`${
										userParams.education.duration || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>office email</span>
									<h3 className={styles.email}>{`${
										userParams.education.officeEmail || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Monthly income</span>
									<h3>{`₦${userParams.education.monthlyIncome[1]} - ₦${
										userParams.education.monthlyIncome[0] || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>loan repayment</span>
									<h3>{`${
										userParams.education.loanRepayment || 'Data Not Found'
									}`}</h3>
								</div>
							</section>
						</article>
						<article>
							<h1>Socials</h1>
							<section>
								<div>
									<span>twitter</span>
									<h3 className={styles.email}>{`${
										userParams.socials.twitter || 'Data Not Found'
									}`}</h3>
								</div>{' '}
								<div>
									<span>facebook</span>
									<h3 className={styles.email}>{`${
										userParams.socials.facebook || 'Data Not Found'
									}`}</h3>
								</div>{' '}
								<div>
									<span>instagram</span>
									<h3 className={styles.email}>{`${
										userParams.socials.instagram || 'Data Not Found'
									}`}</h3>
								</div>{' '}
							</section>
						</article>
						<article>
							<h1>Guarantor</h1>
							<section>
								<div>
									<span>full name</span>
									<h3>{`${userParams.guarantor.firstName} ${
										userParams.guarantor.lastName || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Phone Number</span>
									<h3>{`${
										userParams.guarantor.phoneNumber || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>Email Address</span>
									<h3>{`${
										userParams.guarantor.address || 'Data Not Found'
									}`}</h3>
								</div>
								<div>
									<span>relationship</span>
									<h3>{`${
										userParams.guarantor.gender === 'Male'
											? 'Brother'
											: 'Sister' || 'Data Not Found'
									}`}</h3>
								</div>{' '}
							</section>
						</article>
					</main>
				</article>
			)}
		</main>
	);
};
export default Userdetails;
