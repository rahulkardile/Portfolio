import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
