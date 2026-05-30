import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scrolltoTop';

import { Home } from './pages/home/home';
import { Models } from './pages/car models/models';
import { Company } from './pages/company/company';

import { Error404 } from './components/error404'

import { Temerario } from './pages/car models/temerario/temerario';
import { Revuelto } from './pages/car models/revuelto/revuelto';
import { Huracan } from './pages/car models/huracan/huracan';
import { Urus } from './pages/car models/urus/urus';


export const App = () => {
  return (
    <div className=''>
      <Navbar />

      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        {/* Models */}
        <Route path="/models" element={<Models />} />
        <Route path='/models/temerario' element={<Temerario />} />
        <Route path='/models/revuelto' element={<Revuelto />} />
        <Route path='/models/huracan-tecnica' element={<Huracan />} />
        <Route path='/models/urus' element={<Urus />} />

        {/* Other Pages */}
        <Route path='/company' element={<Company />} />

        {/* error 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>

      <Footer />
    </div>
  );
};