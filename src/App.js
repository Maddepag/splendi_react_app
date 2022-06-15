import {React, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages';
import AboutPage from './pages/about';
import ShowsPage from './pages/shows';
import MerchPage from './pages/merch';
import MusicPage from './pages/music';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <Router>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      
      <Routes>
        <Route path='/' element={ <Home /> }></Route>
        <Route path='/about' element={ <AboutPage /> }></Route>
        <Route path='/shows' element={ <ShowsPage /> }></Route>
        <Route path='/merch' element={ <MerchPage /> }></Route>
        <Route path='/music' element={ <MusicPage /> }></Route>
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
