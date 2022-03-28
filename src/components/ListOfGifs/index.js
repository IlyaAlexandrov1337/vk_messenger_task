import React from "react";

export default function ListOfGifs({data}) {
	const { term: name, results: list } = data
	return (
		<>
			<h1>{name}</h1>
				{list.map((gif, i) => (<img key={i} src={gif.media[0].gif.url} alt={gif.content_description}/>))}
		</>
	);
}
