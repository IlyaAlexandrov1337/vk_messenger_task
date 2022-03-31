import React from "react";
import Gif from "../Gif";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export default function ListOfGifs({data}) {
	return (
		<ResponsiveMasonry columnsCountBreakPoints={{350: 2, 768: 3, 1024: 4}}>
			<Masonry> {data.map(gif => <Gif id={gif.id} key={gif.id} dims={gif.media[0].gif.dims}
									  url={gif.media[0].gif.url} alt={gif.content_description}/>)}
			</Masonry>
		</ResponsiveMasonry>
	);
}
