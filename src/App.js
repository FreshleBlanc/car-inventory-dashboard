import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './component/Home';
import Inventory from './component/Inventory';
import Profile from './component/Profile';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

/* 
* Create 2 new React components:
* /about
* /contact
*
* Please add at least one heading, paragraph tag, and unordered list to each component.
*/

export default function App() {
  return (
    <div className="App">
      {/* <Counter name="WITHOUT CURLY" />
      <Counter default={1} />
      <Counter default={2} />
      <Counter default={3} name="lower case" />
      <Counter default={5} />
      <Counter default={10} name={"WITH CURLY"} /> */}
      
      {/* <Students /> */}

      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/inventory">Inventory</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/">Home</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}