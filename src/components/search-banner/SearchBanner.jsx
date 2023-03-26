import { useState, useEffect } from 'react';
import useFetching from '../../hooks/useFetching';
import axios from 'axios';
import Search from '../search/Search';
import classes from './search-banner.module.scss';

const customInputStyles = {
	padding: '10px',
	fontSize: '18px',
};

// FIXME decompose!!!
export default function SearchBanner() {
	const [bgImage, setBgImage] = useState(null);
	const [fetchBgImage, loading, error] = useFetching(async () => {
		const response = await axios.get('/images/random');
		const { image, author, tags } = response.data;

		console.log(image);
		setBgImage(image);
	});

	useEffect(() => {
		fetchBgImage();
	}, []);

	if (!bgImage) return;

	return (
		<div
			className={classes.banner}
			// FIXME change url
			style={{
				backgroundImage: `url(${`http://localhost:4760${bgImage.url_webp_full}`})`,
			}}
		>
			<div className={classes.bannerContent}>
				<h1 className={classes.searchH1}>
					You can find whatever you
					<br />
					want... I hope so :D
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
