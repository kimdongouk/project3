import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import { getEmotionImgById } from './util';
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/new" element={<New />}/>
        <Route path="/diary/:id" element={<Diary />}/>
        <Route path="/edit" element={<Edit />}/>
      </Routes>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>new</Link>
        <Link to={"/diary"}>diary</Link>
        <Link to={"/edit"}>edit</Link>
      </div>
    </div>
  );
}

export default App;
