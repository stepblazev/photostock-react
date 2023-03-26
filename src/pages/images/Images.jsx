import { useState, useEffect } from 'react';
import axios from 'axios';
import useFetching from '../../hooks/useFetching';
import classes from './images.module.scss';
import ImageList from '../../components/image-list/ImageList';
import SearchBanner from '../../components/search-banner/SearchBanner';

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

		const images = data.images.map((image) => ({ ...image, liked: false }));
		setImages(images);
	});

	useEffect(() => {
		fetchImages();
	}, [page]);

	return (
		<div style={{ height: '100%' }}>
			<SearchBanner />
			<ImageList images={images} />
		</div>
	);
}
