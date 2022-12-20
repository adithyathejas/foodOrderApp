import Input from "../../components/UI/Input"
import classes from "../MealItem/MealItemForm.module.css"

const MealItemForm = ()=> {
    return (
        <form className={classes.form}> 
        <Input label='Amount' input={{
            id:'Amount',
            type: 'number',
            min:'1',
            max: '2',
            step:'1',
            defaultValue:'1'
        }}/>
         <button>+ Add</button>
        </form>
    )
}

export default MealItemForm