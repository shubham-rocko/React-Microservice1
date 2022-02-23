import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import GreetingCat from "./GreetingCat";
import RandomCat from "./RandomCat";
import "./App.css";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <Router history={history}>
      <Routes>
        <Route exact path="/" element={<RandomCat/>} />
        <Route exact path="/cat/:greeting" element={<GreetingCat/>} />
      </Routes>
    </Router>
  );
}

export default App;