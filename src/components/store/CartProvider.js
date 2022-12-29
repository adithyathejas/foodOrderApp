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
            console.log(items)   
            setItems([...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)])
            // setItems([...items,newItem])
        }
       
        console.log(ItemIndex)

    }
    const removeItemFromCartHandler = id => {
        const ItemIndex = items.findIndex(x=>x.id===id)
        let existingItem = items[ItemIndex]
        if(existingItem.quantity>1){
            let newItem = {...existingItem,quantity:Number(existingItem.quantity)-1}
            setItems([...items.slice(0,ItemIndex),newItem,...items.slice(ItemIndex+1)])
        }
        else{
            setItems([...items.slice(0,ItemIndex),...items.slice(ItemIndex+1)])
        }
        
        
    }

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