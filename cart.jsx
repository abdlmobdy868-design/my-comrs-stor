import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { carcontext } from "./cretcontext.jsx"
import { FaTrashAlt } from "react-icons/fa";
import "./cart.css"


function Cart() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(carcontext)
  const navigate = useNavigate()
  const totalprice = cart.reduce((toe, item) => toe + item.price * (item.quantity || 1), 0);
  return (
    <div className='checkout'>
      <div className='ordersummary'>
        <h2>Order Summary</h2>

        <div className='items'>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div className='item-cart' key={index}>
                <div className='img-nam'>
                  <img src={item.thumbnail} alt="" />
                  <div className='contrnt'>
                    <h3>{item.title}</h3>
                    <p className='prc-item'>${item.price}</p>
                    <div className='quantly'>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                      <span className='qut'>{item.quantity || 1}</span>
                      <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    </div>
                  </div>
                </div>
                <button className='remove-btn' onClick={() => removeFromCart(item.id)}><FaTrashAlt /></button>
              </div>
            ))
          )}
        </div>

        <div className='total-price'>
          <h3>Total Price: ${totalprice.toFixed(2)}</h3>
        </div>
        <div className='sumpt'>
          <button 
            className='checkout-btn' 
            style={{
              width: '100%',
              background: 'var(--main_color)',
              color: 'white',
              border: 'none',
              padding: '15px 20px',
              fontSize: '18px',
              fontWeight: 'bold',
              borderRadius: '5px',
              cursor: 'pointer',
              marginTop: '20px',
              marginBottom: '20px',
              transition: 'all 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#0077c0';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = 'var(--main_color)';
              e.target.style.transform = 'scale(1)';
            }}
            onClick={() => navigate('/checkout')}
          >
            Place Order
          </button>
        </div>
        


      </div>
    </div>
  )
}

export default Cart
