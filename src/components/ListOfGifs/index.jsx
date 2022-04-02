import React from 'react';
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry';
import PropTypes from 'prop-types';
import Gif from '../Gif';

export default function ListOfGifs({data}) {
	return (
		<ResponsiveMasonry columnsCountBreakPoints={{350: 2, 768: 3, 1024: 4}}>
			<Masonry>
				{data.map(gif => (
					<Gif
						id={gif.id}
						key={gif.id}
						dimensions={gif.dimensions}
						url={gif.url}
						description={gif.description}
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
}

ListOfGifs.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		dimensions: PropTypes.shape({
			width: PropTypes.number,
			height: PropTypes.number,
		}),
		url: PropTypes.string,
		description: PropTypes.string,
	})),
};
