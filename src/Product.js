import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';

function Product({ rating, price, image, id }) {

    const [{basket}, dispatch]=useStateValue();
    console.log(basket);
    const addToBasket = () => {
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                ratingop:{rating},
                pricep:{price},
                image:{image},
                id:{id}
            },
        });
    };

  return (
    <div className="product">
        <div className="product_info" >
          <p>Manchi book idi</p>
          <p className="product_price">
              <small>$</small>
              <strong>{price}</strong>
          </p>
          <div className="product_rating">
              {Array(rating).fill().map((_,i) => (<p>⭐</p>))}
              
          </div>
        </div>
        <img src="http://pngimg.com/uploads/book/book_PNG51114.png" />
        <button onClick={addToBasket}>Add to Cart</button>
    </div>
  )
}

export default Product
