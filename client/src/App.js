import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Protected from './pages/Protected';
import Register from './pages/Register';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/" element={<Protected/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
