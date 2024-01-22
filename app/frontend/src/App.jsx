import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/tasks" element={<Home />} />
      <Route exact path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
