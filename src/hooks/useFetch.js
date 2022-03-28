import { useState, useEffect } from "react";

const getPath = (name, limit) =>
	`https://g.tenor.com/v1/search?q=${name}&key=${process.env.REACT_APP_API_KEY}&limit=${limit}`

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
						const res = await fetch(getPath(data.term, 2));
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
