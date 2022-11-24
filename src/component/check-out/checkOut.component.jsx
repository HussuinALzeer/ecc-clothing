import React from "react";
import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { selectCartTotal } from "../../redux/cart/cart.selector";

import CheckoutItem from "../checkout-item/checkoutItem.component";

import './checkOut.styles.scss'
import { motion } from'framer-motion';

const Checkout  = ({cartItems,cartItemsTotal}) => {

    return(
        <motion.div className="checkout-page"
        initial ={{opacity:0 }}
            animate= {{opacity:1}}
            exit ={{opacity:0}}
        >
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

        </motion.div>
    )
}

const mapStateToProps = (state) =>({
    cartItems:selectCartItems(state),
    cartItemsTotal:selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout);