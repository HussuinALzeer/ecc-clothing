import React from "react";

import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../component/preview-collection/preview-collection.component";

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
            <div className="shop-page">
                {
                    collections.map(({ id , ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>
                    ))
                    
                }
                asd
                
            </div>  

        )
    }


}

export default Shoppage;