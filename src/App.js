import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <Router >
      <Header />
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element= {<Cart/>} />
      </Routes>
    </Router>
  );
}

export default App;
