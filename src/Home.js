import "./Components/WordList";
import WordList from "./Components/WordList";
import Intro from "./Components/Intro";
import Daily from "./Components/Daily";

function Home() {
  return (
    <>
      <Intro />
      <div className="main">
        <h1>Đơn ngữ của ngày</h1>
        <Daily/>
        <h1>Danh sách đơn ngữ</h1>
        <WordList api={"http://localhost:5000/api/dict"}/>
      </div>
    </>
  );
}

export default Home;
