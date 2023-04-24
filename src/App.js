import React from 'react';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login,Signup} from './components/Login';
import Categories from './components/Categories';
import Creator from './components/CreatorUpload';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={HomePage}/>
          <Route path="/login" Component={Login}/>
          <Route path='/signup' Component={Signup}/>
          <Route path='/Categories' Component={Categories}/>
          <Route path='/Creator' Component={Creator}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
