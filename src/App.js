import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [cartShown,setCartShown] = useState(false)
  
  const showCartHandler = () => {
       setCartShown(true)
  } 

  const hideCartHandler = ()=> {
      setCartShown(false)
  }


  return (
    <CartProvider>
    {cartShown&&<Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
