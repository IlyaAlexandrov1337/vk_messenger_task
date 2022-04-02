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
						dims={gif.media[0].gif.dims}
						url={gif.media[0].gif.url}
						alt={gif.content_description}
					/>
				))}
			</Masonry>
		</ResponsiveMasonry>
	);
}

ListOfGifs.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object),
};
