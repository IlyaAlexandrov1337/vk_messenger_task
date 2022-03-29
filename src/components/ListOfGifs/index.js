import React from "react";
import Gif from "../Gif";

export default function ListOfGifs({data}) {
	const { term: name, results: list } = data
	return (
		<>
			<h1>{name}</h1>
				{list.map(gif => <Gif key={gif.id}
									  url={gif.media[0].gif.url} alt={gif.content_description}/>)}
		</>
	);
}
