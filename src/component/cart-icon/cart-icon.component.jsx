import React from "react";

//redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHiddenName,itemCount})=>{

    return(
        <div className="cart-icon" onClick={toggleCartHiddenName}>
            <ShopingIcon className="shopping-icon"></ShopingIcon>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}


//redux to connect it with the action
const mapDispatchToProps = dispatch =>({
    toggleCartHiddenName: ()=> dispatch(toggleCartHidden())
})


// redux to bring the data from redux
//i will add a new object to the list togather all quantity
const mapStatuToProps = ({cart :{cartItems}}) =>({
    itemCount :cartItems.reduce(
        (accumalatedQuantity, cartItem) =>accumalatedQuantity + cartItem.quantity 
        , 0)    // reduce here is a native array method in javascript
})

export default connect(mapStatuToProps,mapDispatchToProps)(CartIcon);