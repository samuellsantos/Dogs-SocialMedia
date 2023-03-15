import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
