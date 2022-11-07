import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.conponent';
import Shoppage from './pages/shop/shop.component';


 
  

function App(props) {
  return (
    <div className="App">
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route  path="/shop" element={<Shoppage />} />

      </Routes>

      
    </div>
  );
}



export default App;
