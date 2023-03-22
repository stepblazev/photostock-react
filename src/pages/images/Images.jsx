import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetching from '../../hooks/useFetching';

export default function Images() {
	const [page, setPage] = useState(1);
	const [images, setImages] = useState([]);

	const [fetchImages, loading, error] = useFetching(async () => {
		const { data } = await axios.get('/images', {
			params: {
				_page: page,
				_tags: [].join(' '),
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
				<div className='list'>
					{images.map((image) => (
						<div className='item'>
							<img src={image.url} alt='ERROR' />
						</div>
					))}
				</div>
			)}
		</div>
	);
}
