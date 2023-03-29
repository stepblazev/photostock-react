import { useState, useEffect } from 'react';
import useFetching from '../../hooks/useFetching';
import api from '../../http';
import Search from '../search/Search';
import classes from './search-banner.module.scss';
import { getImageUrl } from '../../utils/utils';

const customInputStyles = {
	padding: '10px',
	fontSize: '18px',
};

// FIXME decompose!!!
export default function SearchBanner() {
	const [bgImage, setBgImage] = useState(null);
	const [fetchBgImage, loading, error] = useFetching(async () => {
		const response = await api.get('/images/random');
		const { image, author, tags } = response.data;
		setBgImage(image);
	});

	useEffect(() => {
		fetchBgImage();
	}, []);

	if (!bgImage) return;

	return (
		<div className={classes.banner}>
			<div
				className={classes.img}
				style={{ backgroundImage: `url(${getImageUrl(bgImage.url_webp_full)})` }}
			></div>
			<div className={classes.bannerContent}>
				<h1 className={classes.searchH1}>
					You can find whatever you want... I hope so :D
				</h1>
				<Search inputStyle={customInputStyles} showSvg={false} />
				<h6 className={classes.searchH6}>
					Just type your keywords. For example: abstract, black, wallpaper and
					etc.
				</h6>
			</div>
		</div>
	);
}
