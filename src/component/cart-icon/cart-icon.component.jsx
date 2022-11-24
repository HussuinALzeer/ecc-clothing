import React from "react";

//redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";

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
const mapStatuToProps = (state) =>({
    itemCount : selectCartItemsCount(state)
})

export default connect(mapStatuToProps,mapDispatchToProps)(CartIcon);