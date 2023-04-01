import { RxGear } from 'react-icons/rx';
import { GoGear } from 'react-icons/go';
import classes from './loader-gear.module.scss';

export default function LoaderGear() {
	return (
		<div className={classes.loader}>
			<RxGear className={classes.loaderGearTop} />
			<GoGear className={classes.loaderGearBottom} />
		</div>
	);
}
