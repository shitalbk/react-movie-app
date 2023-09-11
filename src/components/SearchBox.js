import React from 'react';

const SearchBox = (props) => {
	return (
		<div className=''>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Search your favorite movie and add it to favorites...'
			></input>
		</div>
	);
};

export default SearchBox;