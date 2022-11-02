import "./Components/WordList";
import WordList from "./Components/WordList";
import Intro from "./Components/Intro";

function Home() {
  return (
    <>
      <Intro />
      <div className="main">
        <h1>Browse words/phrases</h1>
        <WordList api={"http://localhost:5000/api/dict"}/>
      </div>
    </>
  );
}

export default Home;
