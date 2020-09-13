import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{basket},dispatch] = useStateValue();
  return (
    <div className="checkout">
        
        <div className="checkout_left">
            <h2 className="checkout_title">Yours Shopping Basket</h2>
            {basket.map((item) => (
                <CheckoutProduct rating={item.ratingop.rating} price={item.pricep} image={item.image.image} id={item.id.id}/>
            ))}
        </div>
        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  )
}

export default Checkout
