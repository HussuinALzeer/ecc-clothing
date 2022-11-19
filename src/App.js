import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.conponent';
import Shoppage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndOut from './pages/sign-in/up/sign.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
 
  

class App extends React.Component {

  constructor(){
    super()
    

    this.state= {
      currentUser:null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      }

      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){

  return (
    <div className="App">
      
      <Header  currentUser={this.state.currentUser}></Header>
      <Routes>
       <Route exact path="/" element={<Homepage />} />
       <Route  path="/shop" element={<Shoppage />} />
       <Route  path="/signIn" element={<SignInAndOut />} />

      </Routes>

      
    </div>
  );


  }
}



export default App;
