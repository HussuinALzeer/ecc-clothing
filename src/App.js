import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.conponent';

const Hatspage = () =>(
  <div>
    <h1>Hats page</h1>
  </div>
)

const Sneakerspage = () =>(
  <div>
    <h1>sneakers page</h1>
  </div>
)

const Jackets = () =>(
  <div>
    <h1>jackets page</h1>
  </div>
)

const TopicDetails = (props) =>{
  console.log(props);
  return(
    <div>
      <h1>Toic details page </h1>
    </div>
  )
  }

 
  

function App(props) {
  return (
    <div className="App">
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route exact path="/Hats" element={<Hatspage />} />
       <Route exact path="/sneakers" element={<Sneakerspage />} />
       <Route exact path="/jackets" element={<Jackets />} />
       <Route exact path="/topics/:topicId" element={<TopicDetails />} />
      </Routes>

      
    </div>
  );
}



export default App;
