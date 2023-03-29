import LoginForm from '../../components/login-form/LoginForm';
import classes from './login.module.scss';

export default function Login() {
	return (
		<div className={classes.login}>
			<LoginForm />
		</div>
	);
}
