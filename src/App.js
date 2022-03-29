import './App.css';
import useFetchList from "./hooks/useFetchList";
import ListOfGifs from "./components/ListOfGifs";

function App() {
  const [data, setData] = useFetchList();
  console.log(data)
  return (
      <main>
        <input
            type="text"
            placeholder="Type your favorite house"
            value={data.term}
            onChange={(e) => setData({ ...data, term: e.target.value })}
        />
        <br />
        {data.results.length > 0 ? <ListOfGifs data={data} />: null}
      </main>
  );
}

export default App;
