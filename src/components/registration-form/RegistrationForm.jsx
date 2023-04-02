import { Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './registration-form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { registration } from '../../redux/authorization/actions';

export default function RegistrationForm() {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password_1, setPassword_1] = useState('');
	const [password_2, setPassword_2] = useState('');

	const { error } = useSelector((state) => state.auth);

	// FIXME (fix the validation)
	const confirm = (e) => {
		e.preventDefault();
		if (username.length === 0 || password_1.length === 0 || password_2.length === 0) {
			alert('Some fields are empty.');
			return;
		}
		if (password_1 !== password_2) {
			alert('Your passwords do not match.');
			return;
		}
		dispatch(registration(username, password_1));
	};

	// FIXME (style these elements)
	return (
		<form className={classes.form}>
			<Link to='/login' className={classes.formLink}>
				Log In
			</Link>
			<h2 className={classes.formHeader}>Sign Up</h2>
			<div data-header='Your username:'>
				<input
					type='text'
					placeholder='username'
					className={classes.formUsername}
					autoComplete='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div data-header='Your password:'>
				<input
					type='password'
					placeholder='password'
					className={classes.formPassword}
					autoComplete='current-password'
					value={password_1}
					onChange={(e) => setPassword_1(e.target.value)}
				/>
			</div>
			<div data-header='Repeat your password:'>
				<input
					type='password'
					placeholder='password'
					className={classes.formPassword}
					autoComplete='current-password'
					value={password_2}
					onChange={(e) => setPassword_2(e.target.value)}
				/>
			</div>
			<button onClick={confirm} className={classes.formConfirm}>
				Confirm
			</button>
			<h6 style={{ textAlign: 'center', color: 'red' }}>{error}</h6>
		</form>
	);
}
