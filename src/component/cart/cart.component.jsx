import React from "react";
import './cart.styles.scss'

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/rain.svg'



import CustomButton from "../custom-button/custtom-button.component";

import CartItem from "../cart-item/carrt-item.component";

import { selectCartItems } from "../../redux/cart/cart.selector";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const Cartbox = ({cartItems,dispatch,...otherProps})=>{
    console.log(otherProps);
    const link =useNavigate()
    return(
        <div className="cartDropDown">
            <div className="cartItems">
                {
                    cartItems.length ?
                cartItems.map( cartItem =>( <CartItem key={cartItem.id} item={cartItem} ></CartItem>))
                :
                 
                <Logo className="logo"></Logo>
                
                }
                <CustomButton onClick={ ()=>{ 
                    link('/checkout');
                    dispatch(toggleCartHidden())
                    
                    }}>Checkout</CustomButton>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    cartItems:selectCartItems(state)
})



export default connect(mapStateToProps)(Cartbox);