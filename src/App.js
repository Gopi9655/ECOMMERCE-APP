import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';
import { commerce } from './lib/commerce';
import { Cart } from './Components/Cart/Cart';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
function App() {
  const [products,setproducts] = useState([]);
  const [cart,setcart] = useState([])
  
  const fetchproducts = async ()=>{
    const {data} = await commerce.products.list();
    setproducts(data)
  }
  const fetchcart = async () => {
    setcart(await commerce.cart.retrieve())
  }
  const handleaddtocart = async(productId,quantity) => {
    const item = await commerce.cart.add(productId,quantity)
     setcart(item)
  }
  const handleUpdateqty = async (productID,quantity) => {
    const cart = await commerce.cart.update(productID,{quantity})
    setcart(cart)
  }

  const handleEmptycart = async () => {
    const  cart = await commerce.cart.empty();
  setcart(cart)
  }
  const handleRemovefromCart = async (productID) => {
    const cart = await commerce.cart.remove(productID)
    setcart(cart)
  }



  useEffect(()=>{
    fetchproducts();
    fetchcart();
  
  },[])
  console.log(products)
  console.log(cart)
  return ( 
    <Router>
        <div className="App">
        <Navbar totalitem = {cart.total_items} />
        <Routes>
        <Route  path='/'  element={<Products  products={products} Onaddtocart = {handleaddtocart}/>} />
        
        <Route  path='/cart' element={<Cart cart = {cart}  handleUpdateqty={handleUpdateqty} handleEmptycart={handleEmptycart} handleRemovefromCart={handleRemovefromCart}/>}/> 
        <Route path='/checkout' element={<Checkout />} />
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
