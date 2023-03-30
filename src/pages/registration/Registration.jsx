import RegistrationForm from '../../components/registration-form/RegistrationForm';
import classes from './registration.module.scss';

export default function Registration() {
	return (
		<div className={classes.registration}>
			<RegistrationForm />
		</div>
	);
}
