import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
            <div className="home_image">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_1500x600._CB406681182_.jpg" alt="Amazon Image" />
            </div>

            <div className="home_row">
                <Product id="1234" rating={4} price={100} image="http://pngimg.com/uploads/book/book_PNG51114.png"/>
                <Product />
            </div>

            <div className="home_row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home_row">
                <Product />
            </div>
        </div>
    </div>
  )
}

export default Home
