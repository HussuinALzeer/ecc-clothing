import React from "react";

import { useNavigate } from "react-router-dom";

import './homepage.styles.scss'

import Directory from "../../component/directory/directory.component";


const Homepage = (props) => {
    const history= useNavigate()

    return(
    
    <div className="homepage">

        <Directory></Directory>
        <button onClick={ ()=> history('/hats')}>hats</button>
    </div>

    
)};


export default Homepage;