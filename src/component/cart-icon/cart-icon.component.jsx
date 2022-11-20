import React from "react";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";

import './cart-icon.styles.scss';


const CartIcon = ()=>{

    return(
        <div className="cart-icon">
            <ShopingIcon className="shopping-icon"></ShopingIcon>
            <span className="item-count">0</span>
        </div>
    )
}

export default CartIcon;