import React from 'react';
import style from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({data, setData}) {
	return (
		<input
			className={style.searchbar}
			autoFocus
			type="text"
			placeholder="Find gifs"
			value={data.term}
			onChange={e => setData({...data, term: e.target.value.replace(/\s+/g, ' ')})}
		/>
	);
}

Searchbar.propTypes = {
	data: PropTypes.shape({
		results: PropTypes.arrayOf(PropTypes.object),
		term: PropTypes.string,
	}),
	setData: PropTypes.func,
};
