import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Inserir from './pages/inserir';
import Listar from './pages/listar';
import Delete from './pages/delete';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/inserir' element={<Inserir />} />
        <Route path='/listar' element={<Listar />} />
        <Route path='/deletar' element={<Delete/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


