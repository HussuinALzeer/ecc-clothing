import React from "react";

//redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';


const CartIcon = ({toggleCartHiddenName})=>{

    return(
        <div className="cart-icon" onClick={toggleCartHiddenName}>
            <ShopingIcon className="shopping-icon"></ShopingIcon>
            <span className="item-count">0</span>
        </div>
    )
}


//redux
const mapDispatchToProps = dispatch =>({
    toggleCartHiddenName: ()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);