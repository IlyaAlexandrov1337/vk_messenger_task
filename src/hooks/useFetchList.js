import { useState, useEffect } from "react";

const getPath = (name, limit, pos) =>
	`https://g.tenor.com/v1/search?q=${name}&key=${process.env.REACT_APP_API_KEY}&limit=${limit}&pos=${pos}`

const isNumeric = (num) => !isNaN(num)

const useFetchList = () => {
	const [data, setData] = useState({
		term: '',
		results: [],
	});

	useEffect(() => {
		const terms = data.term.split(' ')
		if (terms[0] === '/gif' && terms[1] && terms[1] !== '') {
			const lastWord = terms[terms.length-1]
			const pos = lastWord[0] ==='#' && isNumeric(lastWord.substring(1)) ? Number(lastWord.substring(1))*12 : 0
			const searchTerm = lastWord[0] !=='#' ? terms.slice(1).join(' ') : terms.slice(1, -1).join(' ')
			const timeoutFlag = setTimeout(() => {
				const getData = async () => {
					try {
						const res = await fetch(getPath(searchTerm, 12, pos));
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
	}, [data]);

	return [ data, setData ];
};

export default useFetchList;
