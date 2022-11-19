import React from "react";
import './sign.styles.scss'

import SignIn from "../../../component/signIn/sign-in.component";
import SignUp from "../../../component/sign-up/sign-up.component";

const SignInAndOut = () =>{
    return(
        <div className="container">
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}


export default SignInAndOut;