import React, {useCallback, useEffect, useState} from "react";
import style from './Gif.module.css'

export default function Gif({url, alt, dims}) {
	const [img, setImg] = useState('');

	const fetchGif = async () => {
		const res = await fetch(url);
		const imageBlob = await res.blob();
		const imageObjectURL = URL.createObjectURL(imageBlob);
		setImg(imageObjectURL);
	};

	useEffect(() => {
		fetchGif();
	}, []);

	const handleClick= useCallback((e) => {
		const { nodeName } = e.target;
		if (nodeName === 'IMG') {
			console.log(e.target)
		}
	}, [])

	return (
		<>
			{img !== '' ? <img onClick={handleClick} className={style.Gif} src={img} alt={alt} /> :
				<div className={style.Loading} style={{aspectRatio: `${dims[0]/dims[1]}`}}>Loading...</div>}
		</>
	);
}
