import './App.css';
import React, {useCallback, useState} from "react";
import Modal from 'react-modal';
import useFetchList from "./hooks/useFetchList";
import ListOfGifs from "./components/ListOfGifs";
import Searchbar from "./components/Searchbar";
import { Context } from "./context";


function App() {
  const [data, setData] = useFetchList();
  const [context, setContext] = useState({});

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal= useCallback(() => {
        setIsOpen(true);
    }, [])

    const closeModal= useCallback(() => {
        setIsOpen(false);
    }, [])

  return (
      <Context.Provider value={[context, setContext]}>
          <div className="App">
              <button onClick={openModal}>Open Modal</button>
              <Modal
                  isOpen={modalIsOpen}
                  ariaHideApp={false}
                  onRequestClose={closeModal}
                  contentLabel="Example Modal"
                  overlayClassName="App-modal-overlay"
                  className="App-modal-content"
              >
                  <button onClick={closeModal}>close</button>
                  {Object.entries(context).map(message =>
                      <div>Гифка с id={message[0]} отправлена {message[1]}</div>)}
              </Modal>
              <main className="App-main">
                  {!data.results ? <p>Проверьте поисковый запрос</p> :
                      data.results.length === 0 ? <p>Пусто</p> :
                      <ListOfGifs data={data.results} />
                  }
              </main>
              <footer className="App-search">
                  <Searchbar data={data} setData={setData}/>
              </footer>
          </div>
      </Context.Provider>
  );
}

export default App;
