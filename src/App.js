import React from 'react';
import './App.css';

import { selectCurrentUser } from './redux/user/user.selecter';


import Header from './component/header/header.component';
import AnimatedRoute from './component/animatedRoute/animatedRoute.component';

import { auth ,createUserProfileDocument ,addCollectionAndDocuments} from './firebase/firebase.utils';
 
import { connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action'

import SHOP_DATA from './redux/collection/shop.data';

import { selectCollectionForPreview  } from './redux/collection/collection.selecter';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    
    const {setCurrentUser ,collectionsArray}=this.props

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
      // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) =>({title,items})))
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){

  return (
    <div className="App">
      
      <Header></Header>
      
      <AnimatedRoute></AnimatedRoute>
    </div>
  );


  }
}

const mapStateToProps = (state) =>({
  currentUser : selectCurrentUser(state),
  collectionsArray :selectCollectionForPreview(state)
})

const mapDispatchToProps = dispatch =>({

  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
