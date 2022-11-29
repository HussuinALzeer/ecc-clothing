import React from "react";
import { motion } from'framer-motion';

import CollectionOverview from "../../component/collection-overview/collection-overview.component";
import { Route,Routes,useRoutes  } from 'react-router-dom';

import Category from "../../component/category/category.component";


const Shoppage = ({match})=> {
   
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



export default Shoppage;