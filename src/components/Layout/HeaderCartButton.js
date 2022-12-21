import './HeaderCartButton.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = props=> {
    return <button className='button' onClick={props.onShownCart}>
        <span className='icon'><CartIcon/></span>
        <span>Your Cart</span>
        <span className='badge'>0</span>
    </button>
}

export default HeaderCartButton