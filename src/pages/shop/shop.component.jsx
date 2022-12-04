import React from "react";
import { motion } from'framer-motion';

import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Route,Routes} from 'react-router-dom';

import { connect } from "react-redux";
import { FetchCollectionsStart } from "../../redux/collection/collection.action";
import { createStructuredSelector } from "reselect";
import { selectCollectionFetching } from "../../redux/collection/collection.selecter";

class Shoppage extends React.Component  {

        

        componentDidMount(){
           const {FetchCollectionsStart} = this.props;
           FetchCollectionsStart()
          
        }

        render(){
          
          const {isCollectionsFetching} = this.props

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

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching:selectCollectionFetching
})

const mapDispatchToProps = (dispatch) =>({
  FetchCollectionsStart : () =>dispatch(FetchCollectionsStart()) 

})

export default connect(mapStateToProps,mapDispatchToProps)(Shoppage);