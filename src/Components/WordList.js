import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./WordList.css";
import axios from "axios";
import { useState, useEffect, Component } from "react";

function WordList({ api }) {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(api);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();

  useEffect(() => {
    setCurrentPage(api);
  }, [api]);

  useEffect(() => {
    let cancel;
    setIsLoaded(false);
    axios
      .get(currentPage, new axios.CancelToken((c) => (cancel = c)))
      .then((res) => {
        setIsLoaded(true);
        setData(res.data.results);
        setNextPage(res.data.next);
        setPrevPage(res.data.previous);
      });

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

  if (!isLoaded) return <h2>Loading...</h2>;
  return (
    <>
      <div className="wordlist">
        {data.map(({ BinhDinh, GiaLai, KonTum, name, pos, id }) => (
          <Card
            key={id}
            id={id}
            word={name}
            pos={pos}
            BinhDinh={BinhDinh}
            GiaLai={GiaLai}
            KonTum={KonTum}
          />
        ))}
      </div>
      <Pagination
        page={currentPageNum}
        goToNextPage={nextPage ? goToNextPage : null}
        goToPrevPage={prevPage ? goToPrevPage : null}
      />
    </>
  );
}

export default WordList;
