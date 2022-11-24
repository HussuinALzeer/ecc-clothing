export const addItemToCart =(cartItems,cartItemToAdd) => { 
    const  existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if(existingCartItem){ // so if i found the same id , then i will open the carItems again with map, then i will search again in the list (cartitems)
        return cartItems.map(cartItem => //  if i found the same id i will add the rest of the info to the list but i will add 1 to the quantity
            cartItem.id === cartItemToAdd.id 
            ?{...cartItem, quantity : cartItem.quantity + 1}
            : 
            cartItem
            )
    }

    return [...cartItems ,{...cartItemToAdd, quantity:1 }] 
}


export const removeItemFromCart =  (cartItems, cartItemToRemove) =>{

    const existingCartItem= cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    )

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map(
        cartItem =>
        cartItem.id === cartItemToRemove.id ?{
            ...cartItem ,quantity:cartItem.quantity - 1
        }
        :
        cartItem
    )
}