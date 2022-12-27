import Input from "../../components/UI/Input"
import classes from "../MealItem/MealItemForm.module.css"
import { useContext } from "react"
import CartContext from "../../components/store/cart-context"

const MealItemForm = (props)=> {
    const CartCtx = useContext(CartContext)
    const addItemToCart = (event)=>{
        event.preventDefault();
        const quantity = document.getElementById('amount_'+props.item.id).value
        CartCtx.addItem({...props.item,quantity:quantity})
    }
    return (
        <form className={classes.form}> 
        <Input label='Amount' input={{
            id:'amount_'+props.item.id,
            type: 'number',
            min:'1',
            max: '2',
            step:'1',
            defaultValue:'1'
        }}/>
         <button onClick={addItemToCart}>+ Add</button>
        </form>
    )
}

export default MealItemForm