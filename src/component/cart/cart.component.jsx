import React from "react";
import './cart.styles.scss'

import CustomButton from "../custom-button/custtom-button.component";


const Cartbox = ()=>{

    return(
        <div className="cartDropDown">
            <div className="cartItems">
                <CustomButton>Checkout</CustomButton>
            </div>
        </div>
    )
}


export default Cartbox;