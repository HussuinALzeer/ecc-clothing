import React from 'react';
import './App.css';

import { selectCurrentUser } from './redux/user/user.selecter';


import Header from './component/header/header.component';
import AnimatedRoute from './component/animatedRoute/animatedRoute.component';

 
import { connect} from 'react-redux';

import { selectCollectionForPreview  } from './redux/collection/collection.selecter';

import { checkUserSession } from './redux/user/user.action';

class App extends React.Component {
  

  componentDidMount() {
  const {checkUserSession} = this.props
  
  checkUserSession()

  }
  componentWillUnmount(){
    // this.unsubscribeFromAuth();
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

  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
