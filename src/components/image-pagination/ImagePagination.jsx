import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/images/actions';
import { getArrayOfNumber } from '../../utils/utils';
import classes from './image-pagination.module.scss';
import PageItem from './PageItem';

// FIXME (is not optimized for big amount of pages)
export default function ImagePagination() {
	const dispatch = useDispatch();
	const { page, total } = useSelector((state) => state.images);
	const pages = getArrayOfNumber(total);

	const changePage = (e) => {
		const page = Number(e.target.textContent);
		dispatch(setPage(page));
	};

	const nextPage = () => dispatch(setPage(page + 1));
	const previousPage = () => dispatch(setPage(page - 1));

	return (
		<div className={classes.pagination}>
			<div className={classes.paginationContent}>
				{page != 1 && (
					<PageItem isActive={false} content={'<-'} handler={previousPage} />
				)}
				{pages.map((p) => (
					<PageItem
						key={p}
						isActive={p == page}
						handler={changePage}
						content={p}
					/>
				))}
				{page != pages[pages.length - 1] && (
					<PageItem isActive={false} content={'->'} handler={nextPage} />
				)}
			</div>
		</div>
	);
}
