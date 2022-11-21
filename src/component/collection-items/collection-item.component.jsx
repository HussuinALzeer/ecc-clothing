import React from "react";
//redux
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

 
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custtom-button.component";

const CollectionItem = ({item,addItem})=> {

    const {id,imageUrl,name,price}=item
return(

    <div className="collection-item">

        <div className="image" style={{backgroundImage: `url( ${imageUrl})`}}/>

        <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        </div>
        <CustomButton onClick={ () => addItem(item)} inverted> Add To Cart</CustomButton>
    </div>
)}

const mapdispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})
export default connect(null,mapdispatchToProps)(CollectionItem);

