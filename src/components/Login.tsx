import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Login.module.scss';
const Login = () => {
	const [showPasswordText, setshowPasswordText] = useState(false);
	const navigate = useNavigate();
	const showPassword = (e: any) => {
		if (e.target.previousSibling.type === 'password') {
			e.target.previousSibling.type = 'text';
			setshowPasswordText(true);
		} else {
			e.target.previousSibling.type = 'password';
			setshowPasswordText(false);
		}
	};
	return (
		<article className={styles.loginContainer}>
			<section>
				<div>
					<img src="/assets/images/logo.png" alt="logo" />
					<img src="/assets/images/signin.svg" alt="signin" />
				</div>
			</section>
			<section>
				<div>
					<h2>Welcome!</h2>
					<p>Enter details to login.</p>
					<form className={styles.form}>
						<div>
							<input type="email" name="email" id="email" placeholder="Email" />
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
							/>
							<span onClick={showPassword}>
								{showPasswordText ? 'hide' : 'show'}
							</span>
						</div>
						<p>Forgot Password?</p>
						<button onClick={() => navigate('/')}>Log in</button>
					</form>
				</div>
			</section>
		</article>
	);
};
export default Login;
