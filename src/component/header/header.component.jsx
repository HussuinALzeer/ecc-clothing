import React from "react";
import "./header.styles.scss"

import { auth } from "../../firebase/firebase.utils";

import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown.svg'

import { connect, Connect } from "react-redux";


const Header = ({currentUser}) => {
    const link =useNavigate()
   return (
    <div className="header">
        <div className="logo-container" onClick={ ()=>link('/')}>
            <Logo className="logo"></Logo>
        </div>

        <div className="options">
            <div className="option" onClick={ () =>link('/shop')}>SHOP</div>
            <div className="option" onClick={ () =>link('/contact')}>CONTACT</div>
            {currentUser ?
            <div className="option" onClick={() =>{auth.signOut()}}>SIGN OUT</div>
            :
            <div onClick={ () =>link('/signIn')}>
                LOGIN
            </div>
        }
        </div>
    </div>
)

   }

   const mapStateToProps = (state) =>({

        currentUser:state.user.currentUser
   })

export default connect(mapStateToProps)(Header);   