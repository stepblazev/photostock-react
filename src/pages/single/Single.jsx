import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetching from '../../hooks/useFetching';
import LoaderGear from '../../components/_UI/loader-gear/LoaderGear';
import { getImageUrl } from '../../utils/utils';
import classes from './single.module.scss';
import api from '../../http/index';

export default function Single() {
	const { id } = useParams();

	const [image, setImage] = useState({});
	const [author, setAuthor] = useState({});
	const [tags, setTags] = useState({});

	const [fetchImage, loading, error] = useFetching(async () => {
		// FIXME (decompose)
		const { data } = await api.get(`/images/${id}`);
		const { image, author, tags } = data;

		console.log(image);

		setImage(image);
		setAuthor(author);
		setTags(tags);
	});

	useEffect(() => {
		fetchImage();
	}, []);

	return (
		<div className={classes.single}>
			<Link to='/images'>{'<- Back to images'}</Link>
			{loading ? (
				<LoaderGear />
			) : (
				<div className={classes.singleContent}>
					<img src={getImageUrl(image.url_webp_full)} alt='' />
				</div>
			)}
		</div>
	);
}
