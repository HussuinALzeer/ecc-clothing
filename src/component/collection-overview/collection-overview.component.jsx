import React from "react";
import './collection-overview.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../preview-collection/preview-collection.component";
import { selectCollectionForPreview } from "../../redux/collection/collection.selecter";

import { selectCollectionHate } from "../../redux/collection/collection.selecter";

const CollectionOverview = ({collections,selectCollectionHate})=>{

    
    return(
        <div className="Collection-overview">
             {
                    collections.map(({ id , ...otherCollectionProps }) => (
                        <CollectionPreview key={id} {...otherCollectionProps} ></CollectionPreview>
                                                
                    ))
                    
                }
        </div>
    )
}

const mapStateToProps =  createStructuredSelector({
    collections: selectCollectionForPreview,
    selectCollectionHate:selectCollectionHate
})

export default connect(mapStateToProps)(CollectionOverview);