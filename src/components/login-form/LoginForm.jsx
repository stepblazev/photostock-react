import { Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './login-form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login, _error } from '../../redux/authorization/actions';

export default function LoginForm() {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const { error } = useSelector((state) => state.auth);

	const confirm = (e) => {
		e.preventDefault();
		dispatch(login(username, password));
	};

	// FIXME STYLE THESE ELEMENTS
	return (
		<form className={classes.form}>
			<Link to='/registration' className={classes.formLink}>
				Registration
			</Link>
			<h2 className={classes.formHeader}>Login</h2>
			<div data-header='Username:'>
				<input
					type='text'
					placeholder='username'
					className={classes.formUsername}
					autoComplete='username'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</div>
			<div data-header='Password:'>
				<input
					type='password'
					placeholder='password'
					className={classes.formPassword}
					autoComplete='current-password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<button onClick={confirm} className={classes.formConfirm}>
				Confirm
			</button>
			<h6 style={{ textAlign: 'center', color: 'red' }}>{error}</h6>
		</form>
	);
}
