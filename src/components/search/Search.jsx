import { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import useTags from '../../hooks/useTags';
import classes from './search.module.scss';

export default function Search() {
	const [active, setActive] = useState(false);
	const { signature, setSignature, userTags, setUserTags, fetchedTags, loading } =
		useTags();

	const changeSignature = (e) => {
		const tags = e.target.value.split(' ');
		setSignature(tags[tags.length - 1]);
	};

	return (
		<div className={classes.input}>
			<input
				type='text'
				onChange={changeSignature}
				value={`${userTags.join(' ')} ${signature}`}
				placeholder='Type something...'
				onFocus={() => setActive(true)}
				onBlur={() => setActive(false)} // FIXME
			/>
			<BiSearchAlt2 />
			{active && (
				<div className={classes.result}>
					{fetchedTags.length === 0 && !loading ? (
						<h2>Nothing to show...</h2>
					) : (
						<ul>
							{fetchedTags.map((t) => (
								<li
									className={classes.item}
									key={t.id}
									onClick={() => setUserTags([...userTags, t.name])}
								>
									{t.name}
								</li>
							))}
						</ul>
					)}
				</div>
			)}
			<button className={classes.searchButton}>Search</button>
		</div>
	);
}
