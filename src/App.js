import axios from 'axios';
import {useState, useEffect, Component} from 'react';
import './Components/WordList';
import WordList from './Components/WordList';
import Navbar from './Components/Navbar';
import Pagination from './Components/Pagination';
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon");
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    let cancel;
    setIsLoaded(false);
    axios.get(currentPage, new axios.CancelToken(c => cancel = c)).then(res => {
      setIsLoaded(true);
      setData(res.data.results.map(d => d.name));
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
    })

    return () => cancel();
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPageNum(currentPageNum + 1);
    setCurrentPage(nextPage);
  }

  function goToPrevPage() {
    setCurrentPageNum(currentPageNum - 1);
    setCurrentPage(prevPage);
  }

  if(!isLoaded) return <h2>Loading...</h2>

  return (
    <>
      <Navbar/>
      <div className="main">
        <WordList data={data} />
        <Pagination page={currentPageNum} goToNextPage={nextPage ? goToNextPage : null} goToPrevPage={prevPage ? goToPrevPage : null}/>
      </div>
    </>
  )
}

export default App;
