import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Home from "./components/home/home";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
