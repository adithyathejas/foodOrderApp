import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShown,setCartShown] = useState(false)
  
  const showCartHandler = () => {
       setCartShown(true)
  } 

  const hideCartHandler = ()=> {
      setCartShown(false)
  }


  return (
    <>
    {cartShown&&<Cart onClose={hideCartHandler}/>} 
      <Header onShowCart={showCartHandler} onHideCart={hideCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </>
  );
}

export default App;
