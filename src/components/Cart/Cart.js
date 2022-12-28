import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext)
  
  const CartItems = cartCtx.items.map(
    (item) => {
      
       return <CartItem key={item.id} item={item}></CartItem>
       
    }
  );

  
  cartCtx.items.forEach((item)=>{
     cartCtx.totalAmount = cartCtx.totalAmount+item.price*(item.quantity)
   })

  return (
    <Modal onClose={props.onClose} > 
    <div className={classes['cart-items']}>
    {CartItems}
    {console.log(CartItems)}
    </div>
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
