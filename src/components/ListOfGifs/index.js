import React from "react";
import Gif from "../Gif";
import Masonry from "react-responsive-masonry"

export default function ListOfGifs({data}) {
	return (
		<Masonry> {data.map(gif => <Gif key={gif.id} dims={gif.media[0].gif.dims}
								  url={gif.media[0].gif.url} alt={gif.content_description}/>)}
		</Masonry>
	);
}
