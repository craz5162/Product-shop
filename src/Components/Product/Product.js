import React from 'react';
import './Product.css'

const Product = ({product, addtocart}) => {
      const {img, name, price, shipping, } = product;
     
      return (
            <div className='product'>
                  <img src={img} alt="" />
                  <h3>Name : {name}</h3>
                  <div className="para">
                        <p>Price : {price}</p>
                        <p>Shipping : {shipping}</p>
                  </div>
                  <button onClick={()=>addtocart(product)}>Add-To-Cart</button>
            </div>
      );
};

export default Product;