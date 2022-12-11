import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Daily() {
  const [word, setWord] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let cancel;
    setIsLoaded(false);
    axios.get(
        "http://localhost:5000/api/daily",
        new axios.CancelToken((c) => (cancel = c))
      ).then((response) => {
        setIsLoaded(true);
      setWord(response.data.results);
      });
    return () => cancel();
  }, []);

  return (
    <div>
      {isLoaded ? (
        <Card
          id={word.id}
          word={word.name}
          pos={word.pos}
          BinhDinh={word.BinhDinh}
          GiaLai={word.GiaLai}
          KonTum={word.KonTum}
        />
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
}

export default Daily;
