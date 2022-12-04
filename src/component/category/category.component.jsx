import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CollectionItem from "../collection-items/collection-item.component";
import CollectionPreview from "../preview-collection/preview-collection.component";

const Category = ({hats ,hatss}) =>{
    console.log(hats);
    return(
        <div className="">
            
            {
                hats.map(({id,items}) =>{
                    console.log(items);
                    
                })
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    // hats:selectCollectionHate,
    // hatss:selectCollectionHateF
})

export default connect(mapStateToProps)(Category)