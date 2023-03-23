import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetching from '../../hooks/useFetching';
import classes from './images.module.scss';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

// FIXME
export default function Images() {
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);

	const [fetchImages, loading, error] = useFetching(async () => {
		const { data } = await axios.get('/images', {
			params: {
				_page: page,
				_tags: ['wallpaper'].join(' '),
				_order: 'latest',
			},
		});
		console.log(data);
		setImages(data.images);
	});

	useEffect(() => {
		fetchImages();
	}, [page]);

	return (
		<div style={{ height: '100%' }}>
			<h1 style={{ textAlign: 'center', padding: '30px' }}>IMAGES</h1>

			{Boolean(images?.length) && (
				<div className={classes.imageList}>
					{images.map((image) => (
						<div key={image.id} className={classes.imageItem}>
							<img
								src={`http://localhost:4760${image.url_webp_preview}`}
								alt='ERROR'
							/>
							<div className={classes.imageItemInfo}>
								<div className={classes.imageItemInfoAuthor}>
									<img
										src={`http://localhost:4760${image.author_url}`}
										alt=''
									/>
									<h6>{image.author}</h6>
								</div>
								<div className={classes.imageItemInfoLikes}>
									<AiOutlineHeart />
									<span>{image.likes}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
}
