
import "./App.css";
//React router 
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components and pages
import SearchAppBar from "./components/NavBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SearchAppBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/:id" element={<Tour/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
