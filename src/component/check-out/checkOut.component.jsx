import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartTotal } from "../../redux/cart/cart.selector";

import CheckoutItem from "../checkout-item/checkoutItem.component";

import './checkOut.styles.scss'

const Checkout  = ({cartItems,cartItemsTotal}) => {

    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>product</span>
                </div>

                <div className="header-block">
                    <span>Description</span>
                </div>

                <div className="header-block">
                    <span>Quantity</span>
                </div>

                <div className="header-block">
                    <span>Price</span>
                </div>

                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(cartItem =>
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
                )
            }

            <div className="total">
                <span>TOTAL: ${cartItemsTotal}</span>
            </div>

        </div>
    )
}

const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state),
    cartItemsTotal:selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout);