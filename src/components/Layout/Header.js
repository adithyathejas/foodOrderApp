import mealsImage from '../../assets/meal.jpg'
import HeaderCartButton from './HeaderCartButton'

import './Header.css'

const Header = props => {
    return <>
    <header className='header'>
        <h1>Nila Palace</h1>
        <h3>Order Online</h3>
        <HeaderCartButton onShownCart={props.onShowCart} onHideCart={props.onHideCart}/>
    </header>
    <div>
        <img className='main-image' src={mealsImage}/>
    </div>
    </> 

}

export default Header; 