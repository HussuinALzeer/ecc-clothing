import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price})=>{

    const  priceForStripe = price * 100 ;
    const publishKey = 'pk_test_51M9RveAe6piZ9F9aU8xBJ2l6N4hAh8aUjt4L85lFz4jPnjvDupkBs3Gxriz36Am7FTdsPyfL90jSBji0QhZVV72500nl1qXMWj'

   const onToken = (token) =>{
        console.log(token);
        alert('Payment Successful')
    }

    return(
    <StripeCheckout
    label="Pay Now"
    name="Clothing"
    image=""
    description={`your total is $${price} `}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token = {onToken}    
    stripeKey={publishKey}
    >

    </StripeCheckout>)
    
}   

export default StripeCheckoutButton;