import React from 'react';
import NavbarComp from './components/NavbarComp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" exact />
      </Routes>
    </Router>

    </>
  );
}

export default App;
