import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
      const [products, setProducts] = useState ([]);
      const [cart, setCart] = useState ([]);
      useEffect (()=>{
            fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
      },[])


      const addtocart = (product) =>{
            console.log(product);
            const NewCart = [...cart, product];
            setCart (NewCart)
      }

      return (
            <div className='shop'>
                  <div className="product-container">
                        <h2>product : {products.length}</h2>
                        
                        <div className="shop-2">
                        {
                              products.map(product => <Product
                              key={product.id}
                              product ={product}
                              addtocart = {addtocart}
                              ></Product>)
                        }
                        </div>
                  </div>
                  <div className="cart-container">
                        <Cart
                        cart ={cart}
                        ></Cart>
                  </div>
            </div>
      );
};

export default Shop;