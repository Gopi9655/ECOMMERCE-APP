import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';
import Commerce from '@chec/commerce.js';
import { commerce } from './lib/commerce';
///import { Cart } from '@chec/commerce.js/features/cart';

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
     setcart(item.cart)
  }
  useEffect(()=>{
    fetchproducts();
    fetchcart();
  
  },[])
  return ( 
    <div className="App">
     <Products  products={products} Onaddtocart = {handleaddtocart}/>
     <Navbar totalitem={cart.total_items} />
    </div>
  );
}

export default App;
