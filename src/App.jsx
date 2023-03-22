import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './Components/Footer/Footer';
import { Header } from './Components/Header/Header';
import { ProtectedRouter } from './Components/Helper/ProtectedRouter';
import { Home } from './Components/Home/Home';
import { Login } from './Components/Login/Login';
import { User } from './Components/User/User';
import { UserStorage } from './UserContext';
import { Photo } from './Components/Photo/Photo';
import { UserProfile } from './Components/User/UserProfile';
import { NotFound } from './Components/NotFound';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="conta/*"
              element={
                <ProtectedRouter>
                  <User />
                </ProtectedRouter>
              }
            />
            <Route path="foto/:id" element={<Photo />} />
            <Route path="perfil/:user" element={<UserProfile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}
