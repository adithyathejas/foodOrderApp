import { useState } from "react";
import CartContext from "./cart-context";



const CartProvider = props => {
    const [items,setItems]=useState([])

    const addItemToCartHandler = item => {
        const ItemIndex = items.findIndex(x=>x.id===item.id)
        if(ItemIndex===-1){
            setItems([...items,item])
        }
        else{
            let existingItem = items[ItemIndex]
            let newItem = {...existingItem,quantity:Number(existingItem.quantity)+Number(item.quantity)}
            items.splice(ItemIndex,1)  
            console.log(items)   
            setItems([...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex)])
            // setItems([...items,newItem])
        }
       
        console.log(ItemIndex)

    }
    const removeItemFromCartHandler = id => {}

    const cartContext={
        items:items,
        totalAmount:0,
        addItem: addItemToCartHandler ,
        removeItem: removeItemFromCartHandler,
        message: "Cart"
    }
   return <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
}

export default CartProvider