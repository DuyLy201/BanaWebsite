import "./Components/WordList";
import Navbar from "./Components/Navbar";
import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./Search";

function App() {

  return (
    <BrowserRouter>
      <div className="page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
