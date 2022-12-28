import classes from './CartItem.module.css'

const CartItem = (props) => {
    const item = props.item
  return (
       <div className={classes.meal}>
        <div><h3>{item.name}</h3></div> <div className={classes.price}>{item.price}</div> <div className={classes.quantity}>x{item.quantity}</div>
    </div>
    
  );
};

export default CartItem;
