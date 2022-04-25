import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Homepage from './Homepage';
import LandingPage from './Landingpage';
import Login from './Login';
import Signup from './Signup';
import Navigation from './Navigation';
import Button from '@mui/material/Button';


function App() {

  const [token, setToken] = useState('');

  return (
    <div className="App">
      <h1>Hello
        
      </h1>
      <Navigation></Navigation>
      <Routes>
        <Route path="/sign-in" element={<Login setToken={setToken} />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/logged-in" element={<Homepage />} />
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
