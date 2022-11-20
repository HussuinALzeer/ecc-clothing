import React from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { Navigate } from "react-router-dom";



import Homepage from './pages/homepage/homepage.conponent';
import Shoppage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndOut from './pages/sign-in/up/sign.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
 
import { connect, Connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'



class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    
    const {setCurrentUser}=this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            })

        });
      }

      setCurrentUser(userAuth);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){

  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route  path="/shop" element={<Shoppage />} />
       <Route exact  path="/signIn" element={<SignInAndOut />} />

      </Routes>

      
    </div>
  );


  }
}

const mapStateToProps = ({user}) =>({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch =>({

  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
