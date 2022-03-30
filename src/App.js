import './App.css';
import useFetchList from "./hooks/useFetchList";
import ListOfGifs from "./components/ListOfGifs";
import { ResponsiveMasonry } from "react-responsive-masonry"


function App() {
  const [data, setData] = useFetchList();
  console.log(data)

  return (
      <div className="App">
          <main className="App-main">
              {data.results.length === 0 ? null :
                  <ResponsiveMasonry
                      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                  >
                      <ListOfGifs data={data.results} />
                  </ResponsiveMasonry>
              }
          </main>
          <footer className="App-search">
              <input
                  className="App-searchbar"
                  autoFocus={true}
                  type="text"
                  placeholder="Find gifs"
                  value={data.term}
                  onChange={(e) => setData({ ...data, term: e.target.value })}
              />
          </footer>
      </div>
  );
}

export default App;
