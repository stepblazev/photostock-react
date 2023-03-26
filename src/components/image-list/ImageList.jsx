import ImageItem from '../image-item/ImageItem';
import classes from './image-list.module.scss';

export default function ImageList({ images }) {
	return (
		Boolean(images?.length) && (
			<div className={classes.imageList}>
				{images.map((image) => (
					<ImageItem key={image.id} image={image} />
				))}
			</div>
		)
	);
}
