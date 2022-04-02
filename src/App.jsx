import './App.css';
import React, {useState} from 'react';
import Log from './components/AsideComponents/Log';
import Info from './components/AsideComponents/Info';
import useFetchList from './hooks/useFetchList';
import ListOfGifs from './components/ListOfGifs';
import Searchbar from './components/Searchbar';
import Context from './context';

function App() {
	const [data, setData] = useFetchList();
	const [context, setContext] = useState({});

	return (
		<Context.Provider value={[context, setContext]}>
			<div className="App">
				<aside className="App-log">
					<Log />
				</aside>
				<aside className="App-info">
					<Info />
				</aside>
				<main className="App-main">
					{data.results
						? <ListOfGifs data={data.results} />
						: data.results.length === 0 ? <p>Пусто</p>
							: <p>Проверьте поисковый запрос</p>}
				</main>
				<footer className="App-search">
					<Searchbar data={data} setData={setData} />
				</footer>
			</div>
		</Context.Provider>
	);
}

export default App;
