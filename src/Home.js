import "./Components/WordList";
import WordList from "./Components/WordList";
import Intro from "./Components/Intro";
import Daily from "./Components/Daily";

function Home() {
  return (
    <>
      <Intro />
      <div className="main">
        <h1>World of the day</h1>
        <Daily/>
        <h1>Browse words/phrases</h1>
        <WordList api={"http://localhost:5000/api/dict"}/>
      </div>
    </>
  );
}

export default Home;
