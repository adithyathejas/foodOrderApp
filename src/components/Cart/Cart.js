import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Cart = (props) => {
  
  const cartCtx = useContext(CartContext)
  
  const CartItems = cartCtx.items.map(
    (item) => {
      
       return <li key={item.id}><span>{item.name}</span>     <span>{item.price}</span>       <span>{item.quantity}</span></li>;
       
    }
  );


  return (
    <Modal onClose={props.onClose} > 
    <div className={classes['cart-items']}>
    {CartItems}
    {console.log(CartItems)}
    </div>
      
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
