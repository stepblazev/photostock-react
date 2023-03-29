import ImageItem from '../image-item/ImageItem';
import classes from './image-list.module.scss';
import { arraySlicer } from '../../utils/utils';

export default function ImageList({ images }) {
	if (images.length === 0) return;

	// console.log(arraySlicer(images, 3));

	return (
		<div className={classes.imageList}>
			{images.map((image) => (
				<ImageItem key={image.id} image={image} />
			))}
		</div>
	);
}
