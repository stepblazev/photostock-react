import ImageItem from '../image-item/ImageItem';
import classes from './image-list.module.scss';

export default function ImageList({ images }) {
	if (images.length === 0) return <h2>No Images</h2>;

	return (
		<div className={classes.imageList}>
			<div className={classes.imageListContent}>
				{images.map((image) => (
					<ImageItem key={image.id} image={image} />
				))}
			</div>
		</div>
	);
}
