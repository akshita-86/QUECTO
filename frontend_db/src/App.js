import React from 'react';
import Home from './pages/Home';
import Landing from './pages/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import ShopDetails from './pages/ShopDetails';
import Contact from './pages/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/shop/:slug" element={<ShopDetails />} />
        <Route path="*" element={<NoMatch />} />
        <Route path='/contact' element= {<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
