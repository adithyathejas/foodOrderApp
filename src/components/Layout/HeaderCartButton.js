import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'
import {useContext} from 'react'
import CartContext from '../store/cart-context'

const HeaderCartButton = props=> {
    const cartCtx = useContext(CartContext)
       let quantity=0
       cartCtx.items.forEach(item=>{
        quantity = quantity+Number(item.quantity)
       })

    return <button className='button' onClick={props.onShownCart}>
        <span className='icon'><CartIcon/></span>
        <span>{cartCtx.message}</span>
        <span className='badge'>{quantity}</span>
    </button>
}

export default HeaderCartButton