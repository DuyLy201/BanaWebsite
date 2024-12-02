import "../Components/WordList";
import WordList from "../Components/WordList";
import Intro from "../Components/Intro";
import Daily from "../Components/Daily";
import myImage from "../Assets/Images/Bilingual.jpg";
import './Home.css'

function SearchResult() {
  return (
    <>
      <Intro />
      <div style={{ width: '100vw' }}>
        <img src={myImage} alt="Dân tộc Bahna" />
      </div>
      <div className="main">
        <h1>Search Results</h1>
        {/* Add your search results content here */}
      </div>
    </>
  );
}

export default SearchResult;