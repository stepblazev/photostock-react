import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import classes from './image-item.module.scss';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../utils/utils';

export default function ImageItem({ image }) {
	const likeClasses = [classes.likes, image.liked ? classes.likesLiked : ''].join(' ');

	return (
		<Link to={`/images/${image.id}`} className={classes.imageItem}>
			<img src={getImageUrl(image.url_webp_preview)} alt='ERROR' />
			<div className={classes.imageItemInfo}>
				<div className={classes.author}>
					<img src={getImageUrl(image.author_url)} alt='' />
					<h6>{image.author}</h6>
				</div>
				{/* FIXME  */}
				<div className={likeClasses}>
					{image.liked ? <AiFillHeart /> : <AiOutlineHeart />}
					<span>{image.likes}</span>
				</div>
			</div>
		</Link>
	);
}
