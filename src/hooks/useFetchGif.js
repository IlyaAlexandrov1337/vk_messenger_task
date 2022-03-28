import { useState, useEffect } from "react";


const useFetchList = () => {
	const [data, setData] = useState({
		term: "",
		results: [],
	});

	useEffect(() => {
		if (data.term !== "") {
			const timeoutFlag = setTimeout(() => {
				const getData = async () => {
					try {
						const res = await fetch(getPath(data.term, 10));
						const gifs = await res.json()
						setData({ ...data, results: gifs.results });
					} catch (err) {
						console.error(err);
					}
				};
				getData();
			}, 1000);
			return () => clearTimeout(timeoutFlag);
		}
	}, [data.term]);

	return [ data, setData ];
};

export default useFetchList;
