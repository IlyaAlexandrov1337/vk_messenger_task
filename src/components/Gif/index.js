import React, {useEffect, useState} from "react";

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

	return (
		<>
			{img !== '' ? <img src={img} alt={alt} /> : <div style={{
				aspectRatio: `${dims[0]/dims[1]}`,
				display: 'block',
				background: 'greenyellow'}}>Loading...</div>}
		</>
	);
}
