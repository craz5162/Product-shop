import React from 'react';
import Product from '../Product/Product';

const Cart = ({cart}) => {
      let total = 0;
      let shipping = 0 ;
      let totalPrice = 0;
      for (const product of cart){
            total = total + product.price;
            shipping = shipping + product.shipping ;
            totalPrice = (total + shipping).toFixed(2) ;
      }


      const clicked = () =>{
            
      }

      return (
            <div>
                  <h2>this is cart</h2>
                        <div className="para-2">
                              <p>Item : {cart.length}</p>
                              <p>Price : ${total}</p>
                              <p>Shipping : ${shipping}</p>
                        </div>
                        <div className="total">
                              <h4>Total : ${totalPrice}</h4>
                        </div>
                        <div className="button">
                        <button onClick={clicked}>Delete-Cart</button><br />
                        <button>Add-Cart</button>
                        </div>
            </div>
      );
};

export default Cart;