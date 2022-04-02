import './App.css';
import React, { useState } from "react";
import Log from "./components/AsideComponents/Log"
import Info from "./components/AsideComponents/Info"
import useFetchList from "./hooks/useFetchList";
import ListOfGifs from "./components/ListOfGifs";
import Searchbar from "./components/Searchbar";
import { Context } from "./context";


function App() {
  const [data, setData] = useFetchList();
  const [context, setContext] = useState({});

  return (
      <Context.Provider value={[context, setContext]}>
          <div className="App">
              <main className="App-main">
                  {!data.results ? <p>Проверьте поисковый запрос</p> :
                      data.results.length === 0 ? <p>Пусто</p> :
                      <ListOfGifs data={data.results} />
                  }
              </main>
              <aside className="App-log">
                  <Log />
              </aside>
              <aside className="App-info">
                  <Info />
              </aside>
              <footer className="App-search">
                  <Searchbar data={data} setData={setData}/>
              </footer>
          </div>
      </Context.Provider>
  );
}

export default App;
