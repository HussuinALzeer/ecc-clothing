import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/preview-collection/preview-collection.component";

import { motion } from'framer-motion';


class Shoppage extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            collections:SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state ;
        
        return(
            <motion.div className="shop-page"
            
            initial ={{opacity:0 }}
            animate= {{opacity:1}}
            exit ={{opacity:0}}
            >
                {
                    collections.map(({ id , ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>
                    ))
                    
                }
                
                
            </motion.div>  

        )
    }


}

export default Shoppage;