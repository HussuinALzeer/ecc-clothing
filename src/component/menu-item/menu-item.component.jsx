import React from "react";

import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss"

const MenuItem = ({id, title , imageUrl ,size ,linkUrl}) =>  {
    const historyy= useNavigate()
    return(


        <div className= {`${size} menu-item`} onClick={ ()=>{ historyy(`shop/${title}`) }} > 

            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}} ></div>
            
            <div className="content">
                <h1 className="tittle">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>

        </div>

    
)};

export default MenuItem;