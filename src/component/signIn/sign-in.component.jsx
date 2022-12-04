import React from "react";
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custtom-button.component";

import { connect } from "react-redux";
//firebase
import GoogleButton from "react-google-button";

// import {auth, signInWithGoogle} from '../../firebase/firebase.utils'

import { googleSignInStart ,emailSignInStart } from "../../redux/user/user.action";

class SignIn extends React.Component{


    constructor(props){
        super(props)
        
        this.state={
            email:'',
            password:''
        }

    }

  
  

    // it will clear the field after i submit in
    handleSubmit = async (event) =>{
        event.preventDefault();

        const {emailSignInStart} = this.props
        const {email,password} = this.state

        emailSignInStart(email,password)

    }

    handelChange = (event)=>{
        const {value,name} =event.target;

        this.setState({ [name]:value}) // the name is the email and the value is what i will type in there
    }


    render() {
        const {googleSignInStart} = this.props
        return(
            <div className="SignIn">
                <h2>I already have an account</h2>
                <span>Sign in with  emai and password</span>


                <form onSubmit={this.handleSubmit}>

                    <FormInput
                     type="emai"
                     name="email"
                     value={this.state.email}
                     required
                     handleChange={this.handelChange}
                     label="email"
                    />

                    <FormInput
                     type="password"
                     name="password"
                     value={this.state.password} 
                     required
                     handleChange={this.handelChange}
                     label="password"
                    />

                    <CustomButton type="submit"> Sign In</CustomButton>
                    <GoogleButton className="buttong" onClick={googleSignInStart}></GoogleButton>
                </form>
            </div>
        )
    }
}

 const mapDispatchToProps = dispatch => ({
    googleSignInStart : () => dispatch(googleSignInStart()),
    emailSignInStart: (email,password) => dispatch (emailSignInStart({email,password}))
 }) 

export default connect(null,mapDispatchToProps)(SignIn);