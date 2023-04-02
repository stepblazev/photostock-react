import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ImageList from '../../components/image-list/ImageList';
import SearchBanner from '../../components/search-banner/SearchBanner';
import LoaderGear from '../../components/_UI/loader-gear/LoaderGear';
import { ImageFilter } from '../../components/image-filter/ImageFilter';
import Error from '../../components/_UI/error/Error';
import { fetching } from '../../redux/images/actions';
import { ERROR_MESSAGE } from '../../_config';
import classes from './images.module.scss';

export default function Images() {
	const dispatch = useDispatch();
	const { images, loading, error, tags, order, page } = useSelector(
		(state) => state.images
	);

	useEffect(() => {
		dispatch(fetching());
	}, [page, order, tags]);

	return (
		<div className={classes.image}>
			<SearchBanner />
			<ImageFilter />
			{loading ? (
				<LoaderGear />
			) : Boolean(error) ? (
				<Error message={ERROR_MESSAGE} />
			) : (
				<ImageList images={images} />
			)}
		</div>
	);
}
