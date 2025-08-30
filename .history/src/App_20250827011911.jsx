import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  return (
    <div>
      <HashRouter>
        <ScrollToTop />
        <Routes></Routes>
      </HashRouter>
    </div>
  );
}

export default App;
