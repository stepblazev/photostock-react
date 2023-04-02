import classes from './image-pagination.module.scss';

export default function PageItem({ isActive, content, handler }) {
	return (
		<span
			className={`${classes.page} ${isActive ? classes.active : 'hoverable'}`}
			onClick={handler}
		>
			{content}
		</span>
	);
}
