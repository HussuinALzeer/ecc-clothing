import React from "react";
import './cart.styles.scss'

import { connect } from "react-redux";

import CustomButton from "../custom-button/custtom-button.component";

import CartItem from "../cart-item/carrt-item.component";

const Cartbox = ({cartItems})=>{

    return(
        <div className="cartDropDown">
            <div className="cartItems">
                {cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} ></CartItem>)}
                <CustomButton>Checkout</CustomButton>
            </div>
        </div>
    )
}


const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(Cartbox);