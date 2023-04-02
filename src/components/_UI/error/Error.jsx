import classes from './error.module.scss';

export default function Error({ message }) {
	return (
		<div className={classes.error}>
			<p className={classes.errorMessage}>{message}</p>
		</div>
	);
}
