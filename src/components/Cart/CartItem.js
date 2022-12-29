import classes from './CartItem.module.css'
import CartContext from '../store/cart-context';
import { useContext } from 'react';

const CartItem = (props) => {
    const item = props.item
    const cartCtx = useContext(CartContext)
    const removeItemFromCart = (event)=>{
      event.preventDefault()
      cartCtx.removeItem(item.id)

      

    }


  return (
       <div className={classes.meal}>
        <div><h3>{item.name}</h3></div> <div className={classes.price}>{item.price}</div> <div className={classes.quantity}>x{item.quantity}<div><button onClick={removeItemFromCart} className={classes.btn}>-</button></div></div>
    </div>
    
  );
};

export default CartItem;
