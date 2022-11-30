import React from "react";
import { motion } from'framer-motion';

import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Route,Routes,useRoutes  } from 'react-router-dom';

import {firestore ,converCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import { connect } from "react-redux";
import { UpdateCollections } from "../../redux/collection/collection.action";


class Shoppage extends React.Component  {
  
        unsubscribeFromSnapshot = null;

        componentDidMount(){
          const {updateCollections} = this.props;

          const collectionRef = firestore.collection('collections');

          collectionRef.onSnapshot(async Snapshot =>{
            const collectonsMap = converCollectionsSnapshotToMap(Snapshot);

            updateCollections(collectonsMap)
          })
        }

        render(){
          
          return(
            <motion.div className="shop-page" initial ={{opacity:0 }} animate= {{opacity:1}}exit ={{opacity:0}}>
            <CollectionOverview/>
          
          <Routes>
          {/* <Route path="shop/:categoryId"  element={<Category /> } /> */}
          {/* <Route path={`${match.url}`}  element={<Category /> } /> */}
          </Routes>
            

       </motion.div>  
          )
        }
}

const mapDispatchToProps = (dispatch) =>({
  updateCollections: collectionMap => dispatch(UpdateCollections(collectionMap))
})

export default connect(null,mapDispatchToProps)(Shoppage);