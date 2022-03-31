import React from "react";
import style from "./Searchbar.module.css"


export default function Searchbar({data, setData}) {
	return (
		<input
			className={style.searchbar}
			autoFocus={true}
			type="text"
			placeholder="Find gifs"
			value={data.term}
			onChange={(e) => setData({ ...data,
				term: e.target.value.replace(/\s+/g, ' ') })}
		/>
	);
}


