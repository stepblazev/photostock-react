import classes from './search.module.scss';

export default function SearchResult({ fetchedTags, addTag }) {
	if (fetchedTags.length === 0) return null;

	return (
		<div className={classes.result}>
			<ul>
				{fetchedTags.map((t) => (
					<li
						key={t.id}
						className={classes.item}
						onClick={() => addTag(t.name)}
					>
						{t.name}
					</li>
				))}
			</ul>
		</div>
	);
}
