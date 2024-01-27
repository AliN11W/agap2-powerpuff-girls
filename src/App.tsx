import React from "react";

import "./styles/App.scss";

import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Episode from "./Episode";
import Home from "./Home";
import { store } from "./redux/store";

function App() {
  return (
    <main className="container mt-5">
      <ReduxProvider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/episodes/:id" element={<Episode />} />
          </Routes>
        </Router>
      </ReduxProvider>
    </main>
  );
}

export default App;
