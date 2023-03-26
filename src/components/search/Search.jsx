import { useRef, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import useTags from '../../hooks/useTags';
import classes from './search.module.scss';
import SearchResult from './SearchResult';

// FIXME
export default function Search({ inputStyle, showSvg = true }) {
	const inputRef = useRef();
	const { signature, setSignature, fetchedTags, loading } = useTags();

	const changeSignature = (e) => {
		const { value } = e.target;
		setSignature(value);
	};

	const addTag = (tag) => {
		const tags = signature.split(' ');
		tags[tags.length - 1] = tag;
		setSignature(tags.join(' ') + ' ');
		inputRef.current.focus();
	};

	const moveInput = (e) => {
		if (e.key === 'ArrowDown') {
			console.log('go');
		}
	};

	return (
		<div className={classes.input}>
			<input
				style={inputStyle}
				ref={inputRef}
				type='text'
				onChange={changeSignature}
				value={signature}
				placeholder='Type something...'
				onKeyDown={moveInput}
			/>
			{showSvg && <BiSearchAlt2 />}
			{/* FIXME */}
			{signature.split(' ')[signature.split(' ').length - 1].length > 0 && (
				<SearchResult fetchedTags={fetchedTags} addTag={addTag} />
			)}
			<button className={classes.searchButton}>Search</button>
		</div>
	);
}
