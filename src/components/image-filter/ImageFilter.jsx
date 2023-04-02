import { useDispatch } from 'react-redux';
import { ORDER_VALUES } from '../../_config';
import { setOrder } from '../../redux/images/actions';
import classes from './image-filter.module.scss';

export function ImageFilter() {
	const dispatch = useDispatch();

	const changeOrder = (e) => {
		dispatch(setOrder(e.target.value));
	};

	return (
		<div className={classes.filter}>
			<h2>Images</h2>
			<div className={classes.filterSelect}>
				<span>Order by:</span>
				<select name='order' onChange={changeOrder}>
					{ORDER_VALUES.map((order, index) => (
						<option key={index} value={order}>
							{order}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
