import ImageItem from '../image-item/ImageItem';
import classes from './image-list.module.scss';
import { arraySlicer } from '../../utils/utils';

export default function ImageList({ images }) {
	if (images.length === 0) return;

	// console.log(arraySlicer(images, 3));

	return (
		<div className={classes.imageList}>
			{/* FIXME */}
			<div className={classes.imageListSettings}>
				<h2>Images</h2>
				<select name='#' id='#'>
					<option value='#' defaultChecked>
						Latest
					</option>
					<option value='#'>Most liked</option>
				</select>
			</div>
			<div className={classes.imageListContent}>
				{images.map((image) => (
					<ImageItem key={image.id} image={image} />
				))}
			</div>
		</div>
	);
}
