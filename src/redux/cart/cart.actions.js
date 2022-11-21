// to add it to the button, then i will go to the button  and write this
//  const mapDispatchToProps = dispatch => ({
//    toggleCartHiddenName: ()=> dispatch(toggleCartHidden())
//    })

import CartActionTypes from "./cart.types";

export const toggleCartHidden =  ()=>({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})