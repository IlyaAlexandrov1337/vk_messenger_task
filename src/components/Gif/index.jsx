import React, {useEffect, useState, useContext} from 'react';
import Context from '../../context';
import PropTypes from 'prop-types';
import style from './Gif.module.css';

export default function Gif({id, url, description, dimensions}) {
	const [img, setImg] = useState('');
	const [context, setContext] = useContext(Context);

	useEffect(() => {
		const fetchGif = async () => {
			const res = await fetch(url);
			const imageBlob = await res.blob();
			const imageObjectURL = URL.createObjectURL(imageBlob);
			setImg(imageObjectURL);
		};

		fetchGif();
		return () => {
			setImg('');
		};
	}, [url]);

	const handleClick = e => {
		const {nodeName} = e.target;
		if (nodeName === 'IMG') {
			if (!context[id]) {
				setContext(context => ({...context, [id]: new Date()}));
			}
		}
	};

	return (
		<>
			{img === ''
				? <div className={style.Loading} style={{aspectRatio: `${dimensions.width / dimensions.height}`}}>
					Loading...</div>
				: <img
					tabIndex={context[id] ? -1 : 0}
					onClick={handleClick}
					onKeyPress={e => e.key === 'Enter' && handleClick(e)}
					className={context[id] ? style.GifSent : style.Gif}
					src={img}
					alt={description}
				/>
			}
		</>
	);
}

Gif.propTypes = {
	id: PropTypes.string,
	dimensions: PropTypes.shape({
		width: PropTypes.number,
		height: PropTypes.number,
	}),
	url: PropTypes.string,
	description: PropTypes.string,
};
