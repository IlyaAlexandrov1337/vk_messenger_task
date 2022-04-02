import React, { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import style from './Gif.module.css'

export default function Gif({id, url, alt, dims}) {
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
		}
	}, [url]);

	const handleClick= (e) => {
		const {nodeName} = e.target;
		if (nodeName === 'IMG') {
			if (!context[id]) setContext(context => ({...context, [id]: new Date()}))
		}
	}

	return (
		<>
			{img !== '' ?
				<img tabIndex={context[id] ? -1 : 0} onClick={handleClick}
					 onKeyPress={(e) => e.key === 'Enter' && handleClick(e)}
					 className={context[id] ? style.GifSent : style.Gif} src={img} alt={alt} /> :
				<div className={style.Loading} style={{aspectRatio: `${dims[0]/dims[1]}`,}}>Loading...</div>
			}
		</>
	);
}
