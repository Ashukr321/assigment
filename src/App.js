import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route  path="/" element={<Card/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
