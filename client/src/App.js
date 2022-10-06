import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Box, Stack} from '@mui/material';
import Login from './pages/Login';
import Protected from './pages/Protected';
import Register from './pages/Register';
import "react-toastify/dist/ReactToastify.css"
import Landing from './pages/LandingPage/Landing';
import './App.css';



function App() {
  return (
    
    
    <Routes>
      <Route exact path="/" element={<Landing/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/protected" element={<Protected/>}/>
      </Routes>
    

      
  );
}

export default App;
