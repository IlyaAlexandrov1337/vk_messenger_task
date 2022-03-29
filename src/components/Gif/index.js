import React, {useEffect, useState} from "react";

export default function Gif({url, alt}) {
	const [img, setImg] = useState();

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
			{img !== undefined ? <img src={img} alt={alt}/> : <span>Loading...</span>}
		</>
	);
}
