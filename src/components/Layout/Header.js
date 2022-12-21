import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

import './Header.css'

const Header = props => {
    return <>
    <header className='header'>
        <h1>React Meals</h1>
        <HeaderCartButton onShownCart={props.onShowCart} onHideCart={props.onHideCart}/>
    </header>
    <div>
        <img className='main-image' src={mealsImage}/>
    </div>
    </> 

}

export default Header; 